import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to Galleria</h1>
        <p>Explore the beauty of art</p>
      </header>
      <section className="featured-artworks">
        <h2>Featured Artworks</h2>
        {/* Add your featured artworks here */}
      </section>
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        {/* Add information about upcoming events */}
      </section>
      <footer className="homepage-footer">
        <p>&copy; 2024 Galleria. All rights reserved.</p>
      </footer>
      <nav className="navigation-links">
        <Link to="/gallery">Gallery</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/about">About Us</Link>
        {/* Add more navigation links as needed */}
      </nav>
    </div>
  );
};

export default Homepage;