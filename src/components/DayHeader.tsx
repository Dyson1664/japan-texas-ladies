import { memo } from "react";

interface DayHeaderProps {
  dayNumber: number;
  title: string;
}

export const DayHeader = memo(({ dayNumber, title }: DayHeaderProps) => {
  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex items-center gap-4 mb-2">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Day {dayNumber}</h2>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="h-px bg-gradient-to-r from-primary via-primary/20 to-transparent" />
    </div>
  );
});