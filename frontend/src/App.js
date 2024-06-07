// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Game from './Game';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Game/>} />
      </Routes>
    </Router>
  );
}

export default App;