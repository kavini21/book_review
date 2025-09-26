import React from 'react';
import { Star } from 'lucide-react';
import './Rating.css';

const Rating = ({ value, max = 5, showValue = false }) => {
  return (
    <div className="rating">
      <div className="stars">
        {[...Array(max)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`star ${index < Math.floor(value) ? 'filled' : ''}`}
            fill={index < Math.floor(value) ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      {showValue && <span className="rating-value">{value.toFixed(1)}</span>}
    </div>
  );
};

export default Rating;