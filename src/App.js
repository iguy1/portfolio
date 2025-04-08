import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import webdev from './images/5eKX.gif';
import { NewPage, Languages, Projects } from './NewPage';
import './App.css';
import Navbar from './Navbar';
import './index.css';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <br />
        <br />
        <h1>Welcome to my Portfolio</h1>
        <h2>Computer Science Student</h2>
        <p>I'm Ian Guy, a Computer Science student at the University of Delaware passionate about technology and programming. I enjoy building clean, efficient, and user-friendly applications.</p>
        <div className="home-buttons">
          <a href="/projects" className="btn">View My Projects</a>
          <a href="/languages" className="btn">My Skills</a>
          <a href="/Ian Guy Resume.pdf" className="btn download-btn" download>Download Resume</a>
        </div>
        <img src={webdev} alt="Web Development" />
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/newpage" element={<NewPage />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;