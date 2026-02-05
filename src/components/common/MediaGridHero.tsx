import { memo, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface ReviewData {
  testimonialText: string;
  author: string;
}

interface MediaGridHeroProps {
  video: string;
  videoPoster?: string;
  images: string[];
  reviews?: ReviewData[];
}

export const MediaGridHero = memo(({
  video,
  videoPoster,
  images,
  reviews,
}: MediaGridHeroProps) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const nextReview = () => {
    if (reviews) {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }
  };

  const prevReview = () => {
    if (reviews) {
      setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }
  };
  // We need exactly 5 images for the grid layout (3 top + 2 bottom, or 3 top + 1 bottom + review)
  const gridImages = images.slice(0, 5);

  return (
    <section className="relative w-full bg-muted/20">
      {/* Media Grid */}
      <div className="max-w-[1400px] mx-auto px-3 py-2 mt-2">
        <div className="flex gap-2 h-[60vh] md:h-[80vh] min-h-[400px] max-h-[800px]">
          {/* Left - Video (tall, full height) */}
          <div className="w-[35%] relative overflow-hidden rounded-xl group flex-shrink-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={videoPoster}
              className="w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />
          </div>

          {/* Right - Image Grid (2 rows) */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Top row - 3 images */}
            <div className="flex-[2] flex gap-2">
              {gridImages.slice(0, 3).map((img, index) => (
                <div 
                  key={`top-${index}`}
                  className="flex-1 relative overflow-hidden rounded-xl group"
                >
                  <img
                    src={img}
                    alt={`Adventure ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />
                </div>
              ))}
            </div>

            {/* Bottom row - 1 image + review OR 2 images */}
            <div className="flex-1 flex gap-2">
              {/* Bottom left image */}
              <div className="flex-1 relative overflow-hidden rounded-xl group">
                <img
                  src={gridImages[4] || gridImages[3]}
                  alt="Adventure 4"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />
              </div>

              {/* Bottom right - Review section or image */}
              {reviews && reviews.length > 0 ? (
                <div className="flex-1 relative overflow-hidden rounded-xl bg-background p-4 md:p-5 flex flex-col justify-center">
                  {/* 5 Stars with rating */}
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-foreground">5/5</span>
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-sm md:text-base text-foreground/90 mb-2 md:mb-3 leading-relaxed line-clamp-4">
                    "{reviews[currentReviewIndex].testimonialText}"
                  </blockquote>

                  {/* Author */}
                  <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">- {reviews[currentReviewIndex].author}</p>

                  {/* Navigation arrows */}
                  {reviews.length > 1 && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevReview}
                        className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="Previous review"
                      >
                        <ChevronLeft className="w-4 h-4 text-foreground" />
                      </button>
                      <span className="text-xs text-muted-foreground">
                        {currentReviewIndex + 1} / {reviews.length}
                      </span>
                      <button
                        onClick={nextReview}
                        className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="Next review"
                      >
                        <ChevronRight className="w-4 h-4 text-foreground" />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex-1 relative overflow-hidden rounded-xl group">
                  <img
                    src={gridImages[3]}
                    alt="Adventure 5"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

MediaGridHero.displayName = "MediaGridHero";
