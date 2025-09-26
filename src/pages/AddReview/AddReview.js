import React, { useState } from 'react';
import Rating from '../../components/Rating/Rating';
import { books } from '../../data/mockData';
import { Send, Book } from 'lucide-react';
import './AddReview.css';

const AddReview = () => {
  const [formData, setFormData] = useState({
    bookId: '',
    reviewerName: '',
    rating: 0,
    review: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Review submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        bookId: '',
        reviewerName: '',
        rating: 0,
        review: ''
      });
    }, 3000);
  };

  const selectedBook = books.find(book => book.id === parseInt(formData.bookId));

  if (submitted) {
    return (
      <div className="add-review-page">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">
              <Send size={48} />
            </div>
            <h2>Review Submitted Successfully!</h2>
            <p>Thank you for sharing your thoughts. Your review helps other readers discover great books.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="add-review-page">
      <div className="container">
        <div className="page-header">
          <h1>Write a Review</h1>
          <p>Share your thoughts about a book you've read</p>
        </div>

        <form className="review-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="bookId">Select a Book</label>
            <select
              id="bookId"
              name="bookId"
              value={formData.bookId}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose a book...</option>
              {books.map(book => (
                <option key={book.id} value={book.id}>
                  {book.title} by {book.author}
                </option>
              ))}
            </select>
          </div>

          {selectedBook && (
            <div className="selected-book">
              <div className="book-preview">
                <img src={selectedBook.image} alt={selectedBook.title} />
                <div className="book-info">
                  <h3>{selectedBook.title}</h3>
                  <p>by {selectedBook.author}</p>
                </div>
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="reviewerName">Your Name</label>
            <input
              type="text"
              id="reviewerName"
              name="reviewerName"
              value={formData.reviewerName}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <div className="rating-input">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  className={`star-button ${formData.rating >= star ? 'active' : ''}`}
                  onClick={() => handleRatingClick(star)}
                >
                  ★
                </button>
              ))}
              <span className="rating-text">
                {formData.rating > 0 && `${formData.rating} out of 5 stars`}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="review">Your Review</label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              placeholder="Share your thoughts about this book..."
              rows={8}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            <Send size={20} />
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;