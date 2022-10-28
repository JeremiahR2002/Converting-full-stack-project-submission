import { Link, Route, Routes } from "react-router-dom"
import  Home  from "./pages/Home"
import './App.css';
import { ScoreBoard } from "./pages/ScoreBoard";
import { Quiz } from "./pages/Quiz";
import React, { useState } from 'react';

function App() {

  return (
  <>
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/ScoreBoard">ScoreBoard</Link></li>
      <li><Link to="/Quiz">Quiz</Link></li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ScoreBoard" element={<ScoreBoard />} />
    <Route path="/Quiz" element={<Quiz />} />
  </Routes>
    </>

  )
  
}

export default App