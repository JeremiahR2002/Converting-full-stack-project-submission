import { Link, Route, Routes } from "react-router-dom"
import  Home  from "./pages/Home"
import './App.css';
import { Quiz } from "./pages/Quiz";
import React, { useState } from 'react';
import { Cat } from './pages/cat';
import { dog } from './pages/dog';

function App() {

  return (
  <>
  <nav>
    <h1 className="title">Are You a Cat or a Dog?</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Quiz">Quiz</Link></li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Quiz/:name" element={<Quiz />} />
    <Route path="/Cat/:name" element={<Cat />} />
    <Route path="/Dog/:name" element={<dog />} />
  </Routes>
    </>

  )
  
}

export default App