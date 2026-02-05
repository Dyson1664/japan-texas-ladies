import { memo } from "react";

export interface CategoryTag {
  emoji: string;
  label: string;
}

interface CategoryTagsProps {
  tags: CategoryTag[];
}

export const CategoryTags = memo(({ tags }: CategoryTagsProps) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-6">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
        >
          <span className="text-lg">{tag.emoji}</span>
          <span className="text-sm font-semibold text-primary">{tag.label}</span>
        </div>
      ))}
    </div>
  );
});

CategoryTags.displayName = "CategoryTags";
