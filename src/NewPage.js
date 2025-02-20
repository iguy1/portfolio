import React, {useState} from 'react';
import Ian from './images/IMG_0229.jpeg';
import lebron from './images/lebron.gif';
import jordan from './images/jordan.gif';
import learning from './images/learning.gif';
import exercise from './images/exercise.gif';
import './NewPage.css';
import './App.css';


 
function NewPage(){
    return(
        <div className = 'newpage'>
            <h1>HI MY NAME IS IAN GUY!</h1>
            <h2>Contact Information:</h2>
            <h3> Email - ianguy015@gmail.com</h3>
            <h3> Phone Number - 302-893-8963</h3>
            <img src={Ian} alt="Ian" style = {{width:'200px', height:'auto'}}/>
            <p>I am a Computer Science student at the University of Delaware.</p>
            <p>I love the power of creation that coding gives me!</p>
            <br />
            <h2>FACTS ABOUT ME!</h2>
            <h3>Hi!! My name is Ian Guy and I am 19 years old.</h3>
            <p>My interest are learning new things and exercise!</p>
            <br />
            <img src={learning} alt="learning" style = {{width:'200px', height:'auto'}}/>
            <img src={exercise} alt="exercise" style = {{width:'200px', height:'auto'}}/>
            <br />
        </div>
    );
}

function Languages(){
    return(
        <div className = 'languages'>
            
            <h1>Languages!</h1>
            <h2>I learned most of these languages through the University Of Delaware. I have taken CISC108,181, and 210.</h2>
            <br />
            <h2>Here is a link to the classes if you are interested in what I have learned.</h2>
            <a href ="https://catalog.udel.edu/preview_program.php?catoid=90&poid=78144">Courses</a>
            <br />
            <h3>⚫Python</h3>
            <br />
            <h3>⚫C language</h3>
            <br />
            <h3>⚫Typescript</h3>
            <br />
            <h3>⚫Currently Learning React</h3>
        </div>
    );
}

function Vote(){
    const [vote, setVote] = useState(null);
    
    const handleVote = (player)=>{
        setVote(player);
        alert(`${player} is the GOAT!`);
    }
    return(
        <div className = 'vote'>
            <h1>Vote for your favorite!</h1>
            <h2>Who is the better basketball player?</h2>
            <h3>Lebron Raymone James a.k.a The Glorious King</h3>
            <img src={lebron} alt="lebron" style = {{width:'500px', height:'auto'}}/>
            {<button onClick={()=>handleVote('Lebron')}>Vote for Lebron!</button>}
            <h3>Michael Jordan</h3>
            <p>He was the GOAT for back in the day but now.....</p>
            <img src= {jordan} alt="mj" style = {{width:'500px', height:'auto'}}/>
            {<button onClick={()=>handleVote('Jordan')}>Vote for Jordan!</button>}
            <br />
            <br />
            {
    
                vote&&(
                    <div>
                    <h1>You voted for {vote}!</h1>
                    <p>Thanks for voting</p>
                    </div>
                )
            }
            
        </div>
    );

}

function Projects(){
    return(
        <div className = 'projects'>
            <h1>Personal Projects</h1>
            <h2>Here are some of my projects!</h2>
            <h3>1. Personal Portfolio Page</h3>
            <p>This is my first personal creation with many more exciting projects on the way!</p>
            <p>This website was created using React.</p>
            <h3>2. Loan Automorzation Calculator</h3>
            <a href= "https://ud-f24-cisc181.github.io/final-project-phase-2-iguy1/" target = "blank" rel="noopener noreferrer">Loan Automorzation Calculator</a>
            <p>This was a school final project for my TypeScript class, written using a react-like framework.</p>
            <br />
            <h3>3. Website for my Club</h3> 
            <a href= "https://iguy1.github.io/compsciclub" target = "blank" rel="noopener noreferrer">Club website</a>
            <p>I created this react application for a school club I recently joined. I used react to create this website.</p>
            <p>I definitely saw improvement in my react skills. I created this project so that our club will have an easy to navigate webpage for current members and people intersted in joining.</p>
            <br />
            <h3>4. Personal Photograhpy Website</h3>
            <a href= "https://iguy1.github.io/iguypictures" target = "blank" rel="noopener noreferrer">Photography website</a>
            <p>I created this react application to upload my personal photograpy ventures that I take at the University of Delaware.</p>
            <h3>4. Github account!</h3>
            <p>You can check out my project repositories in the link below.</p>
            <a href ="https://github.com/iguy1" target = "blank" rel="noopener noreferrer">Check out my GitHub!</a>

        </div>
    )
}

export {NewPage,Languages,Vote,Projects};