import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import News from './Components/News/News';

const App = () => {
  return (
    <Router>
      <Navigation />
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h1 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Top Headlines</h1>
        <h2 style={{ fontStyle: 'italic', color: '#555', marginTop: '0' }}>from ABP News</h2>
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
    </Router>
  );
}

export default App;
