// NewsItem.jsx

import React from 'react';
import './NewsItem.css'; // Import CSS file


const NewsItem = ({ headline, details, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{headline}</h5>
        <p className="card-text">{details}</p>
        <a href="#" className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
};

export default NewsItem;
