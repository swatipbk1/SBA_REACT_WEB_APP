// NotFoundPage.jsx
import React, { useState, useEffect } from 'react';
import './NotFoundPage.css'; // Import CSS file

const NotFoundPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change loading state after 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="not-found-container">
      {loading ? (
        <div className="loading-container">
          <h2>Loading...</h2>
          {/* Add your loading animation here */}
        </div>
      ) : (
        <div className="content-container">
          <h1 className="not-found-heading">404 - Page Not Found</h1>
          <div className="sorry-text">
            <div className="s">S</div>
            <div className="o">O</div>
            <div className="r">R</div>
            <div className="r">R</div>
            <div className="y">Y</div>
          </div>
          <p className="not-found-text">
            <span>The page you are looking for does not exist.</span>
          </p>
          <p className="not-found-text">
            Please try again later or go back to the <a href="/">Homepage!</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default NotFoundPage;
