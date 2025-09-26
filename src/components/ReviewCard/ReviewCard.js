import React from 'react';
import Rating from '../Rating/Rating';
import { User, Calendar } from 'lucide-react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="reviewer-info">
          <div className="reviewer-avatar">
            <User size={20} />
          </div>
          <div>
            <h4 className="reviewer-name">{review.reviewerName}</h4>
            <div className="review-meta">
              <Calendar size={14} />
              <span>{formatDate(review.date)}</span>
            </div>
          </div>
        </div>
        <Rating value={review.rating} />
      </div>
      
      <div className="review-content">
        <h3 className="review-book-title">{review.bookTitle}</h3>
        <p className="review-text">{review.review}</p>
      </div>
      
      {review.helpful && (
        <div className="review-footer">
          <span className="helpful-count">{review.helpful} people found this helpful</span>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;