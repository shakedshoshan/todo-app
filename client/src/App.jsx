import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home.jsx'; // Ensure this matches the actual file name

const App = () => {
  return (
    <div >
    <Routes >
      <Route path='/' element={<Home />} />
    </Routes>
    </div>
  );
};

export default App;