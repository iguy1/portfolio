import React from 'react';
import regularshow from './images/regularshow.gif';
import naruto from './images/naruto.gif';
import terrion from './images/terrion.gif';
import './App.css';

function TvShow(){
    return(
        <div className = 'tv-show'>
            <h1>These are my top 3 favorite TV Shows!</h1>
            <h2>1.Regular Show</h2>
            <img src={regularshow} alt="Regular Show" style = {{width:'500px', height:'auto'}}/>
            <h2>2.Naruto</h2>
            <img src = {naruto} alt="Naruto" style = {{width:'500px', height:'auto'}}/>
            <h2>3.Game of Thrones</h2>
            <img src ={terrion} alt="Game of Thrones" style = {{width:'500px', height:'auto'}}/>

         
            
        </div>
    )


}

export default TvShow;