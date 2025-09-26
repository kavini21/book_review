import React from 'react';
import { BookOpen, Users, Star, Heart, Target, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <BookOpen size={40} />,
      title: 'Comprehensive Reviews',
      description: 'Detailed reviews covering plot, characters, writing style, and overall impact.'
    },
    {
      icon: <Users size={40} />,
      title: 'Community Driven',
      description: 'A vibrant community of book lovers sharing their honest opinions and recommendations.'
    },
    {
      icon: <Star size={40} />,
      title: 'Quality Ratings',
      description: 'Reliable rating system to help you discover your next great read.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Passionate Readers',
      description: 'Written by readers who truly love books and want to share that passion.'
    }
  ];

  const stats = [
    { number: '1,200+', label: 'Books Reviewed' },
    { number: '5,000+', label: 'Active Members' },
    { number: '8,500+', label: 'Reviews Written' },
    { number: '50+', label: 'Genres Covered' }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>About BookReview</h1>
            <p className="hero-subtitle">
              Connecting readers with their next favorite book through honest, thoughtful reviews
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <div className="mission-icon">
              <Target size={60} />
            </div>
            <h2>Our Mission</h2>
            <p>
              At BookReview, we believe that every reader deserves to find books that inspire, 
              entertain, and enrich their lives. Our mission is to create a trusted platform 
              where book lovers can discover new reads through authentic reviews and thoughtful 
              recommendations from fellow readers.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title">Why Choose BookReview?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <h2 className="section-title">Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <h2>Our Story</h2>
            <div className="story-text">
              <p>
                BookReview was born from a simple frustration: finding truly honest book 
                recommendations in a world full of marketing hype. As avid readers ourselves, 
                we knew there had to be a better way to discover great books.
              </p>
              <p>
                Founded in 2023, we started as a small community of book enthusiasts who 
                wanted to share authentic reviews without commercial bias. Today, we've grown 
                into a thriving platform that helps thousands of readers discover their next 
                favorite book every month.
              </p>
              <p>
                Our reviewers come from diverse backgrounds and reading preferences, ensuring 
                that you'll find perspectives that resonate with your own literary tastes. 
                Whether you're into literary fiction, thrilling mysteries, or thought-provoking 
                non-fiction, our community has something for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <Award className="value-icon" />
              <h3>Quality</h3>
              <p>We maintain high standards for all reviews, ensuring they're helpful and informative.</p>
            </div>
            <div className="value-item">
              <Heart className="value-icon" />
              <h3>Authenticity</h3>
              <p>All reviews come from real readers sharing genuine opinions about books they've read.</p>
            </div>
            <div className="value-item">
              <Users className="value-icon" />
              <h3>Community</h3>
              <p>We foster a welcoming environment where all readers can share and discover together.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Join Our Community</h2>
            <p>
              Ready to discover your next great read? Join thousands of readers who trust 
              BookReview for honest, helpful book recommendations.
            </p>
            <div className="cta-buttons">
              <a href="/reviews" className="btn btn-primary">Browse Reviews</a>
              <a href="/add-review" className="btn btn-secondary">Write a Review</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;