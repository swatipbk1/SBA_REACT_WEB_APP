
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
      
