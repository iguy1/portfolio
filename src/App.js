import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import webdev from './images/5eKX.gif';
import { NewPage, Languages, Vote, Projects } from './NewPage';
import './App.css';
import Sports from './sports';
import TvShow from './tvshow';
import Navbar from './Navbar';
import './index.css';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home">
        <h1 className="home">Welcome to my Personal Portfolio Page!</h1>
        <h2>What's up!!</h2>
        <h3>Welcome to my personal portfolio page! Here you can learn more about me and my interests.</h3>
        <p>My name is Ian Guy, an aspiring software engineer passionate about creating innovative solutions through the use of technology.</p>
        <img src={webdev} alt="webdev" style={{ width: '600px' }} />
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpage" element={<NewPage />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/tvshow" element={<TvShow />} />
      </Routes>
    </Router>
  );
}

export default App;