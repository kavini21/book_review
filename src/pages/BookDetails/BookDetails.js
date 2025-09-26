import React from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { books, reviews } from '../../data/mockData';
import { Calendar, User, BookOpen } from 'lucide-react';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));
  const bookReviews = reviews.filter(r => r.bookId === parseInt(id));

  if (!book) {
    return (
      <div className="container">
        <div className="not-found">
          <h1>Book not found</h1>
          <p>The book you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="book-details">
      <div className="container">
        <div className="book-header">
          <div className="book-cover">
            <img src={book.image} alt={book.title} />
          </div>
          <div className="book-info">
            <h1 className="book-title">{book.title}</h1>
            <p className="book-author">by {book.author}</p>
            <div className="book-rating">
              <Rating value={book.rating} showValue />
              <span className="review-count">({book.reviewCount} reviews)</span>
            </div>
            <div className="book-meta">
              <div className="meta-item">
                <Calendar size={16} />
                <span>Published: {book.publishedYear}</span>
              </div>
              <div className="meta-item">
                <BookOpen size={16} />
                <span>Pages: {book.pages}</span>
              </div>
              <div className="meta-item">
                <User size={16} />
                <span>Publisher: {book.publisher}</span>
              </div>
            </div>
            <div className="book-genres">
              {book.genres.map((genre, index) => (
                <span key={index} className="genre-tag">{genre}</span>
              ))}
            </div>
            <p className="book-description">{book.description}</p>
            <div className="book-actions">
              <button className="btn btn-primary">Add to Reading List</button>
              <button className="btn btn-secondary">Write a Review</button>
            </div>
          </div>
        </div>

        <div className="reviews-section">
          <h2>Reviews ({bookReviews.length})</h2>
          <div className="reviews-list">
            {bookReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          {bookReviews.length === 0 && (
            <div className="no-reviews">
              <p>No reviews yet. Be the first to review this book!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;