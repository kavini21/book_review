import React, { useState } from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { reviews } from '../../data/mockData';
import { Filter } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const [sortBy, setSortBy] = useState('newest');
  const [filterRating, setFilterRating] = useState('all');

  const handleSearch = (searchTerm) => {
    let filtered = reviews;
    
    if (searchTerm.trim() !== '') {
      filtered = reviews.filter(review =>
        review.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.reviewerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.review.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    applyFiltersAndSort(filtered);
  };

  const applyFiltersAndSort = (reviewsToFilter) => {
    let filtered = [...reviewsToFilter];
    
    // Filter by rating
    if (filterRating !== 'all') {
      const rating = parseInt(filterRating);
      filtered = filtered.filter(review => Math.floor(review.rating) === rating);
    }
    
    // Sort reviews
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        case 'helpful':
          return (b.helpful || 0) - (a.helpful || 0);
        default:
          return 0;
      }
    });
    
    setFilteredReviews(filtered);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    applyFiltersAndSort(filteredReviews);
  };

  const handleRatingFilter = (rating) => {
    setFilterRating(rating);
    applyFiltersAndSort(reviews);
  };

  return (
    <div className="reviews-page">
      <div className="container">
        <div className="reviews-header">
          <h1>All Reviews</h1>
          <p>Discover what readers are saying about their favorite books</p>
        </div>

        <div className="search-section">
          <SearchBar onSearch={handleSearch} placeholder="Search reviews..." />
        </div>

        <div className="filters-section">
          <div className="filters-header">
            <Filter size={20} />
            <span>Filters & Sorting</span>
          </div>
          
          <div className="filters-content">
            <div className="filter-group">
              <label>Sort by:</label>
              <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Rated</option>
                <option value="lowest">Lowest Rated</option>
                <option value="helpful">Most Helpful</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Rating:</label>
              <select value={filterRating} onChange={(e) => handleRatingFilter(e.target.value)}>
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
          </div>
        </div>

        <div className="reviews-list">
          {filteredReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="no-reviews">
            <p>No reviews found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;