import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number; // Current rating (out of 5)
  maxRating?: number; // Maximum stars (default: 5)
  isEditable?: boolean; // If the user can set the rating
  onRatingChange?: (rating: number) => void; // Callback for rating change
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  isEditable = false,
  onRatingChange,
}) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const handleClick = (star: number) => {
    if (isEditable && onRatingChange) {
      onRatingChange(star);
    }
  };

  const handleMouseEnter = (star: number) => {
    if (isEditable) setHoveredStar(star);
  };

  const handleMouseLeave = () => {
    if (isEditable) setHoveredStar(null);
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1;
        const isFilled = hoveredStar
          ? starValue <= hoveredStar
          : starValue <= rating;

        return (
          <Star
            key={starValue}
            className="cursor-pointer transition-colors duration-200"
            size={20}
            strokeWidth={1} // Adjusts border thickness
            fill={isFilled ? "#FFA500" : "none"} // Orange fill for filled stars
            stroke={isFilled ? "#FFA500" : "gray"} // Orange border for filled stars, gray for unfilled
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
