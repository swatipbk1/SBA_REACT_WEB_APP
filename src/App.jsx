import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import News from './Components/News/News';
import Footer from './Components/Footer/Footer'; // Import Footer component
import './App.css'; // Import CSS file
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="top-heading">
          <h1>Top Headlines</h1>
          <h2>Real-Time News Coverage: Latest Updates</h2>
        </div>
        <Routes>
          <Route path="/" element={<News category="general" />} />
          <Route path="/business" element={<News category="business" />} />
          <Route path="/entertainment" element={<News category="entertainment" />} />
          <Route path="/health" element={<News category="health" />} />
          <Route path="/science" element={<News category="science" />} />
          <Route path="/sports" element={<News category="sports" />} />
          <Route path="/technology" element={<News category="technology" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
