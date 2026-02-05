import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { memo } from "react";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
  avatar: string;
  avatarImage?: string;
}

export const TestimonialCard = memo(({
  name,
  location,
  text,
  rating,
  date,
  avatar,
  avatarImage
}: TestimonialCardProps) => (
  <Card className="p-6 flex flex-col h-full">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      <span className="text-sm text-muted-foreground ml-2">{date}</span>
    </div>
    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{text}</p>
    <div className="flex items-center gap-3">
      {avatarImage ? (
        <img 
          src={avatarImage} 
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground font-medium text-sm">{avatar}</span>
        </div>
      )}
      <div>
        <p className="font-medium text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </div>
  </Card>
));