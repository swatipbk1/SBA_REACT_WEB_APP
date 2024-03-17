import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Get the root container
const rootContainer = document.getElementById('root');

// Check if a root has already been created for the container
const existingRoot = rootContainer._reactRootContainer;

