import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import webdev from './images/5eKX.gif';
import {NewPage,Facts,Vote, Projects} from './NewPage';
import './App.css';
import Sports from './sports'
import TvShow from './tvshow'


function Home(){
    return(
        <div className='home'>
            <h1>Welcome to my Personal Portfolio Page!</h1>
            <h2>What's up!!</h2>
            <p>My name is Ian Guy, an aspiring software engineer passionate about creating innovative solutions through the use of technology.</p>
            <img src={webdev} alt="webdev" style = {{width:'600px'}}/>
            <Link to = "/newpage">
                <button>Personal Info!</button>
            </Link>
        </div>
    );
}



function App(){
return (
    <Router>
        <div> 
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/newpage" element = {<NewPage />} />
                <Route path = "/facts" element = {<Facts />} />
                <Route path = "/vote" element = {<Vote />} />
                <Route path = "/projects" element = {<Projects />} />
                <Route path = "/sports" element = {<Sports />} />
                <Route path = "/tvshow" element = {<TvShow />} />
            </Routes>
        </div>
    </Router>

);

}

export default App;  