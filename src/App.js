import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import BookDetails from './pages/BookDetails/BookDetails';
import Reviews from './pages/Reviews/Reviews';
import AddReview from './pages/AddReview/AddReview';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/add-review" element={<AddReview />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;