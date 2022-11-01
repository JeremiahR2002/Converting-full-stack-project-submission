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
      <body>
        <script src="Forum.css"></script>
        <div id="grid"></div>
      </body>
      <li class = "grid-container"><Link to="/Quiz">Quiz</Link></li>
    </ul>
  </nav>
  <body>
    <h2 className="grid-conatiner" ></h2>
  </body>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Quiz" element={<Quiz />}/>
    <Route path="/Cat" element={<Cat />} />
    <Route path="/Dog" element={<dog />} />
  </Routes>
    </>

  )
  
}

export default App