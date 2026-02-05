import React from "react";
import { Route as RouteIcon, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

// Colors cycle across stops
const ROUTE_COLORS = ["#06b6d4", "#f97316", "#8b5cf6", "#22c55e", "#eab308", "#ef4444"];
const getColor = (i: number) => ROUTE_COLORS[i % ROUTE_COLORS.length];

// --- Mobile: horizontal, draggable scroller (no arrows) ---
function MobileScroller({ stops }: { stops: string[] }) {
  if (!stops?.length) return null;
  
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [isScrollable, setIsScrollable] = React.useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Calculate scroll position as percentage
      const maxScroll = scrollWidth - clientWidth;
      const position = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollPosition(position);
    }
  };

  React.useEffect(() => {
    const checkScrollable = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        setIsScrollable(scrollWidth > clientWidth + 5); // +5 for small tolerance
      }
    };
    
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, [stops]);

  return (
    <div className="w-full rounded-none bg-transparent p-0 shadow-none" style={{ border: 0 }}>
      <div className="mb-1 flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <RouteIcon className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Route</h3>
        </div>
        
        {/* Scroll indicator dots - only show when scrollable */}
        {isScrollable && (
          <div className="flex gap-1.5">
            {[...Array(Math.min(stops.length, 5))].map((_, i) => {
              const isActive = i === Math.round(scrollPosition * (Math.min(stops.length, 5) - 1));
              return (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full transition-all duration-200"
                  style={{ 
                    backgroundColor: isActive ? '#0FC2BF' : '#d1d5db',
                    transform: isActive ? 'scale(1.2)' : 'scale(1)'
                  }}
                />
              );
            })}
          </div>
        )}
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="no-scrollbar overflow-x-auto touch-pan-x" 
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex items-center flex-nowrap gap-1.5 py-0.5">
          {stops.map((stop, i) => {
            const color = getColor(i);
            const nextColor = getColor(i + 1);
            const isLast = i === stops.length - 1;

            return (
              <div key={stop + i} className="flex items-center flex-none">
                <span
                  className="mr-1.5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold text-black"
                  style={{ backgroundColor: color }}
                  title={stop}
                >
                  <MapPin className="h-4 w-4 text-black opacity-90" />
                  <span className="truncate max-w-[180px]">{stop}</span>
                </span>

                {!isLast && (
                  <span
                    className="mx-0.5 h-0.5 w-4 flex-none rounded"
                    style={{ background: `linear-gradient(to right, ${color}, ${nextColor})` }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hide native scrollbars */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

// --- Desktop/Tablet: arrows in header, track below, draggable too (gentle progressive sizing) ---
type SizeMode = "normal" | "compact" | "tight";

function DesktopScroller({ stops, slug }: { stops: string[]; slug?: string }) {
  if (!stops?.length) return null;

  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);
  const [mode, setMode] = React.useState<SizeMode>("normal");
  const modeRef = React.useRef<SizeMode>("normal");
  React.useEffect(() => { modeRef.current = mode; }, [mode]);

  const updateState = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    // arrows
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);

    // determine overflow amount
    const overflow = Math.max(0, el.scrollWidth - el.clientWidth);

    // Fit-to-width with gentle thresholds
    if (overflow <= 60) {
      if (modeRef.current !== "normal") {
        modeRef.current = "normal";
        setMode("normal");
      }
    } else if (overflow <= 350) {
      if (modeRef.current !== "compact") {
        modeRef.current = "compact";
        setMode("compact");
      }
    } else {
      if (modeRef.current !== "tight") {
        modeRef.current = "tight";
        setMode("tight");
      }
    }
  }, []);

  React.useEffect(() => {
    updateState();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    const onResize = () => updateState();
    window.addEventListener("resize", onResize);
    // re-check after fonts load
    // @ts-ignore
    document.fonts?.ready?.then(updateState).catch(() => {});
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", onResize);
    };
  }, [updateState, stops]);

  const scrollBy = (dx: number) => trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });

  const isJapan = slug === "japan";

  // Check if tablet size (768px to 1024px)
  const [isTablet, setIsTablet] = React.useState(false);
  
  React.useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkTablet();
    window.addEventListener("resize", checkTablet);
    return () => window.removeEventListener("resize", checkTablet);
  }, []);

  // size presets (more aggressive scaling to fit)
  const presets = {
    normal: {
      chip: isTablet ? "px-2 py-0.5 text-xs gap-1" : "px-2.5 py-1 text-[13px] gap-1",
      icon: isTablet ? "h-3.5 w-3.5" : "h-4 w-4",
      connectorW: isTablet ? "w-3" : "w-5",
      labelMax: isTablet ? "max-w-[90px]" : "max-w-[140px]",
    },
    compact: {
      chip: isTablet ? "px-1.5 py-0.5 text-[11px] gap-0.5" : "px-2 py-0.5 text-xs gap-1",
      icon: isTablet ? "h-3 w-3" : "h-3.5 w-3.5",
      connectorW: isTablet ? "w-2" : "w-4",
      labelMax: isTablet ? "max-w-[75px]" : "max-w-[120px]",
    },
    tight: {
      chip: isTablet ? "px-1 py-0.5 text-[10px] gap-0.5" : "px-1.5 py-0.5 text-xs gap-0.5",
      icon: isTablet ? "h-3 w-3" : "h-3.5 w-3.5",
      connectorW: isTablet ? "w-2" : "w-3",
      labelMax: isTablet ? "max-w-[65px]" : "max-w-[100px]",
    },
  }[mode];

  return (
    <div
      className={`w-full rounded-none bg-transparent p-0 shadow-none md:max-w-full lg:max-w-none ${
        isJapan ? "flex flex-col items-center" : ""
      }`}
      style={{ border: 0 }}
    >
      {/* Header with icon + arrows - hidden for Japan layout */}
      {!isJapan && (
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RouteIcon className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Route</h3>
          </div>
          <div className="md:flex xl:hidden items-center gap-1.5">
            <button
              type="button"
              aria-label="Scroll route left"
              onClick={() => scrollBy(-320)}
              disabled={!canScrollLeft}
              className="rounded-full p-1 disabled:opacity-30 hover:opacity-80 focus:outline-none"
              style={{ background: "transparent", border: 0, boxShadow: "none" }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Scroll route right"
              onClick={() => scrollBy(320)}
              disabled={!canScrollRight}
              className="rounded-full p-1 disabled:opacity-30 hover:opacity-80 focus:outline-none"
              style={{ background: "transparent", border: 0, boxShadow: "none" }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Scroll track */}
      <div ref={trackRef} className="no-scrollbar overflow-x-auto" style={{ scrollBehavior: "smooth" }}>
        <div className="flex items-center flex-nowrap gap-1.5 py-0.5">
          {/* Inline label for Japan layout */}
          {isJapan && (
            <div className="flex items-center gap-2 mr-3">
              <RouteIcon className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-[#506345]">Route</h3>
            </div>
          )}

          {stops.map((stop, i) => {
            const color = getColor(i);
            const nextColor = getColor(i + 1);
            const isLast = i === stops.length - 1;

            return (
              <div key={stop + i} className="flex items-center flex-none">
                <span
                  className={`mr-1.5 inline-flex items-center rounded-full font-semibold text-black ${presets.chip}`}
                  style={{ backgroundColor: color }}
                  title={stop}
                >
                  <MapPin className={`${presets.icon} text-black/90`} />
                  <span className={`truncate ${presets.labelMax}`}>{stop}</span>
                </span>

                {!isLast && (
                  <span
                    className={`mx-0.5 h-0.5 ${presets.connectorW} flex-none rounded`}
                    style={{ background: `linear-gradient(to right, ${color}, ${nextColor})` }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hide native scrollbars */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

export function ResponsiveRoute({ stops, slug }: { stops: string[]; slug?: string }) {
  if (!stops?.length) return null;
  return (
    <>
      <div className="md:hidden">
        <MobileScroller stops={stops} />
      </div>
      <div className="hidden md:block">
        <DesktopScroller stops={stops} slug={slug} />
      </div>
    </>
  );
}

export default ResponsiveRoute;
