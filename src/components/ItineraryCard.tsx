import { Card } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import { memo } from "react";

interface Activity {
  time: string;
  title: string;
  location: string;
  description: string;
  image: string;
  duration: string;
}

interface ItineraryCardProps {
  activity: Activity;
  isLast?: boolean;
  isFirst?: boolean;
  dayNumber?: number;
}

export const ItineraryCard = memo(({ activity, isLast = false, isFirst = false, dayNumber }: ItineraryCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
      <div 
        className="aspect-[16/8] md:aspect-[16/7] relative overflow-hidden"
        id={isFirst && dayNumber ? `day-${dayNumber}-first-image` : undefined}
      >
        <img 
          src={activity.image} 
          alt={activity.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-background/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full">
          <div className="flex items-center gap-1 text-xs md:text-sm font-medium text-foreground">
            <Clock className="w-3 h-3" />
            {activity.time}
          </div>
        </div>
        <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-background/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full">
          <span className="text-xs md:text-sm font-medium text-muted-foreground">{activity.duration}</span>
        </div>
      </div>
      
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{activity.title}</h3>
        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{activity.location}</span>
        </div>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{activity.description}</p>
      </div>
    </Card>
  );
});