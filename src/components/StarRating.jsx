import React, { useState, useEffect } from 'react';
import '../css/StarRating.css';

const StarRating = ({ totalStars = 5, initialRating = 0, onRate }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    setRating(initialRating); 
  }, [initialRating]);

  const handleClick = (star) => {
    setRating(star);
    setHoverRating(0);
    if (onRate) onRate(star);
  };

  const handleMouseEnter = (star) => {
    setHoverRating(star);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="star-rating" onMouseLeave={handleMouseLeave}>
      {[...Array(totalStars)].map((_, index) => {
        const star = index + 1;
        return (
          <span
            key={star}
            className={`star ${star <= (hoverRating || rating) ? 'filled' : ''}`}
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
