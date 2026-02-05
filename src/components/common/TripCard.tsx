import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { memo } from "react";

interface TripCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  tag?: string;
  route: string;
  description?: string;  // fallback if overview not provided
  overview?: string;     // NEW: one-line overview
}

export const TripCard = memo(({
  id,
  image,
  title,
  location,
  duration,
  price,
  tag,
  route,
  description,
  overview
}: TripCardProps) => {
  const shortLocation = location.split(",").pop()?.trim() || location;
  const oneLine = overview ?? description;

  const cardContent = (
    <Card className="overflow-hidden rounded-3xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {tag && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {tag}
          </div>
        )}
      </div>

      {/* tighter bottom padding; adjust pb-* if needed */}
      <CardContent className="px-6 pt-6 pb-3">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1 tracking-tight">{title}</h3>

          {/* One-line overview (with ellipsis) */}
          {oneLine && (
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed break-words">
                {oneLine}
              </p>
            )}

          {/* location | duration  ——  price */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="text-base">📍</span>
              <span className="font-medium">{shortLocation}</span>
              <span aria-hidden="true" className="text-muted-foreground/50">|</span>
              <span>{duration}</span>
            </p>

            <span className="text-lg font-bold text-foreground">
              {price.replace(/^from\s*/i, "").trim() !== price ? (
                <>
                  <span className="font-normal text-base">From </span>
                  {price.replace(/^from\s*/i, "").trim()}
                </>
              ) : (
                price
              )}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Link to={route} className="block" onClick={() => window.scrollTo(0, 0)}>
      {cardContent}
    </Link>
  );
});
