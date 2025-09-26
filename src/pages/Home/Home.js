import React, { useState } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { books, reviews } from '../../data/mockData';
import { TrendingUp, BookOpen, Users, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genres.some(genre => genre.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setSearchResults(filtered);
    setIsSearching(true);
  };

  const featuredBooks = books.slice(0, 6);
  const recentReviews = reviews.slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Discover Your Next Great Read</h1>
            <p className="hero-subtitle">
              Explore thousands of book reviews and find your perfect match
            </p>
            <div className="hero-search">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <BookOpen className="stat-icon" />
              <h3>1,200+</h3>
              <p>Books Reviewed</p>
            </div>
            <div className="stat-item">
              <Users className="stat-icon" />
              <h3>5,000+</h3>
              <p>Active Readers</p>
            </div>
            <div className="stat-item">
              <Star className="stat-icon" />
              <h3>8,500+</h3>
              <p>Reviews Written</p>
            </div>
            <div className="stat-item">
              <TrendingUp className="stat-icon" />
              <h3>4.8/5</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Search Results or Featured Books */}
        <section className="books-section">
          <h2 className="section-title">
            {isSearching ? 'Search Results' : 'Featured Books'}
          </h2>
          <div className="books-grid">
            {(isSearching ? searchResults : featuredBooks).map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          {isSearching && searchResults.length === 0 && (
            <div className="no-results">
              <p>No books found matching your search criteria.</p>
            </div>
          )}
        </section>

        {/* Recent Reviews */}
        {!isSearching && (
          <section className="reviews-section">
            <h2 className="section-title">Recent Reviews</h2>
            <div className="reviews-grid">
              {recentReviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;