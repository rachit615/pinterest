import { useState } from "react";
import StarSVG from "./StarSVG";

export default function StarRating({
  noOfStars = 5,
  value = 2,
  onChange = () => {},
}) {
  const [selectedStarIndex, setSelectedStarIndex] = useState(value - 1);
  const [hoveredStarIndex, setHoveredStarIndex] = useState(-1);

  const handleStarClick = (index) => {
    setSelectedStarIndex(index);
    onChange(index + 1);
  };

  const handleMouseHover = (index) => {
    setHoveredStarIndex(index);
  };

  const handleMouseLeave = (index) => {
    setHoveredStarIndex(-1);
  };

  const isStarFilled = (index) => {
    if (hoveredStarIndex === -1 && index <= selectedStarIndex) {
      return true;
    }

    if (index <= hoveredStarIndex) {
      return true;
    }
    return false;
  };

  return (
    <div className="starRating">
      {[...new Array(noOfStars)].map((i, index) => {
        return (
          <button
            key={index}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleMouseHover(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <StarSVG fill={isStarFilled(index)} />
          </button>
        );
      })}
    </div>
  );
}
