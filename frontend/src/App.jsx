import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
// import { Analytics } from "@vercel/analytics/react"

import Landing from './pages/Landing';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
