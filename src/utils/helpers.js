export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

export const getAverageRating = (reviews) => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((total, review) => total + review.rating, 0);
  return (sum / reviews.length).toFixed(1);
};

export const sortBooks = (books, sortBy) => {
  switch (sortBy) {
    case 'rating':
      return [...books].sort((a, b) => b.rating - a.rating);
    case 'title':
      return [...books].sort((a, b) => a.title.localeCompare(b.title));
    case 'author':
      return [...books].sort((a, b) => a.author.localeCompare(b.author));
    case 'reviews':
      return [...books].sort((a, b) => b.reviewCount - a.reviewCount);
    default:
      return books;
  }
};