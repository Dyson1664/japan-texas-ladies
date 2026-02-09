import { CalendarDays, MapPin } from "lucide-react";

import japanDay01Group from "@/assets/japan-day01-groupbb.jpg";
import japanDay03Group from "@/assets/japan-day03-group.jpg";
import japanTokyo from "@/assets/japan-tokyo.jpg";
import japanDay06Nara from "@/assets/japan-day06-main-nara-deer-park.jpg";
import japanTea from "@/assets/japan-tea2.jpg";
import japanTorii from "@/assets/japan-torii.jpg";

type Tag = {
  emoji: string;
  label: string;
};

const tags: Tag[] = [
  { emoji: "🚀", label: "Adventure" },
  { emoji: "🪭", label: "Culture" },
  { emoji: "🧳", label: "Solo" },
];

const details = [
  { icon: CalendarDays, label: "8 days" },
  { icon: MapPin, label: "Tokyo - Kyoto", underlined: true },
];

type JapanAdventureDesktopCardProps = {
  leftMediaVideoSrc?: string;
  priceLabel?: string;
  ctaLabel?: string;
};

export default function JapanAdventureDesktopCard({
  leftMediaVideoSrc,
  priceLabel = "€1,999 EUR",
  ctaLabel = "Reserve Now",
}: JapanAdventureDesktopCardProps) {
  return (
    <section className="w-full px-5 py-5">
      <div className="mx-auto w-full max-w-[1420px] md:w-[94%] lg:w-[92%] xl:w-[90%] md:px-6 lg:px-12">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-playfair font-semibold leading-none tracking-tight text-[#0fc2bf] lg:text-4xl">
              Japan Adventure
            </h1>

            {tags.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {tags.map(({ emoji, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary lg:text-sm"
                  >
                    <span className="text-base">{emoji}</span>
                    {label}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-2 flex items-center gap-4 text-lg font-semibold text-slate-800 lg:text-xl">
              {details.map(({ icon: Icon, label, underlined }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#0fc2bf] lg:h-5 lg:w-5" />
                  <span
                    className="font-playfair"
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-[240px] pt-1 text-right">
            <p className="text-lg text-slate-700">
              From <span className="text-3xl font-extrabold text-slate-900 lg:text-4xl">{priceLabel}</span>
            </p>
            <button
              type="button"
              className="mt-2 rounded-full bg-[#0fc2bf] px-5 py-2 text-base font-bold text-white transition hover:brightness-95"
            >
              {ctaLabel}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full overflow-hidden rounded-[24px] md:w-[94%] lg:w-[92%] xl:w-[90%]">
        <div className="grid h-[460px] grid-cols-12 grid-rows-2 gap-1 bg-white lg:h-[500px] xl:h-[530px]">
          {leftMediaVideoSrc ? (
            <video
              className="col-span-3 row-span-2 h-full w-full object-cover"
              src={leftMediaVideoSrc}
              muted
              loop
              playsInline
              autoPlay
            />
          ) : (
            <img
              src={japanDay01Group}
              alt="Tokyo metro platform"
              className="col-span-3 row-span-2 h-full w-full object-cover"
            />
          )}
          <img src={japanDay03Group} alt="Group by a river in Japan" className="col-span-5 h-full w-full object-cover" />
          <img src={japanTokyo} alt="Traveler in Tokyo at night" className="col-span-4 h-full w-full object-cover" />
          <img src={japanDay06Nara} alt="Travelers in Japanese street" className="col-span-3 h-full w-full object-cover" />
          <img src={japanTea} alt="Tea ceremony class" className="col-span-3 h-full w-full object-cover" />
          <img src={japanTorii} alt="Orange Torii gates in Kyoto" className="col-span-3 h-full w-full object-cover" />
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500 lg:hidden">
        This component is optimized for desktop and meant as a visual preview.
      </p>
    </section>
  );
}
