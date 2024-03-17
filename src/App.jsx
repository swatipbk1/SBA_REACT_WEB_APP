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
   
  );
}

export default App;
