import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-image">
        <img src={book.image} alt={book.title} />
      </div>
      <div className="book-content">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <div className="book-rating">
          <Rating value={book.rating} />
          <span className="rating-text">({book.reviewCount} reviews)</span>
        </div>
        <p className="book-description">{book.description}</p>
        <div className="book-genres">
          {book.genres.map((genre, index) => (
            <span key={index} className="genre-tag">{genre}</span>
          ))}
        </div>
        <Link to={`/book/${book.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};