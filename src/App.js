import React from 'react';
import lebron from './images/lebron.gif';

function App(){
    return(
    <div>
   <h1>Welcome to my Personal Portfolio Page!</h1>
   <h2>Please enjoy this picture of my goat.</h2>
   <img src={lebron} alt="Lebron" />
  </div>
    );
}

export default App;  