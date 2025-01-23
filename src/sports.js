import React from 'react';
import Maxey from './images/maxey.gif';
import jimmy from './images/jimmy.gif';
import Saquan from './images/IMG_1582.gif'
import './App.css';

function Sports(){
    return(
        <div className = 'sports'>
            <h1>These are my favorite sport teams!</h1>
            <h2>1.Eagles</h2>
            <img src={Saquan} alt="Barkley" style = {{width:'500px', height:'auto'}}/>
            <h2>2.Phillies</h2>
            <img src = {jimmy} alt="Phils" style = {{width:'500px', height:'auto'}}/>
            <h2>3.Sixers</h2>
            <img src = {Maxey} alt="Sixers" style = {{width:'500px', height:'auto'}}/>
            <p>.....Yeah there all Philadelphia teams, I'm from Delaware what did you expect🤷🏿</p>
           
           
        
        </div>
    )

}

export default Sports;