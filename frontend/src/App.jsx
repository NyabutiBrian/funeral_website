import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";

import Landing from './pages/Landing';
import Welcome from './pages/Welcome';

import { inject } from '@vercel/analytics';

inject();

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
