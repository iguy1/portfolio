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
        return (
          <section className="languages">
            <h1>My Tech Stack</h1>
            <h2>
              These are the programming languages and technologies I've learned through my journey at the University of Delaware and beyond.
            </h2>
            <p>
              I have taken courses such as Introduction to Computer Science, Object-Oriented Programming, and Intro to Systems Programming.
              I am currently taking Data Structures and Algorithms, which is a challenging yet rewarding course. I am also taking Machine Orginazation and Assembly Language, which is a fascinating subject that delves into the inner workings of computers.
            </p>
            <a
              href="https://catalog.udel.edu/preview_program.php?catoid=90&poid=78144"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Courses
            </a>
            <div className="tech-stack">
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                <p>Python</p>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C Language" />
                <p>C Language</p>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                <p>TypeScript</p>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <p>React</p>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                <p>C++</p>
              </div>
              <div className="tech-item">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="Assembly" />
  <p>Assembly</p>
</div>
            </div>
          </section>
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

function Projects() {
        return (
            <section className="projects">
              <h1>Personal Projects</h1>
              <h2>Here are some of my projects!</h2>
              <div className="project-grid">
                <div className="project-card">
                  <h3>Personal Portfolio Page</h3>
                  <p>This is my first personal creation with many more exciting projects on the way!</p>
                  <p>This website was created using React.</p>
                </div>
                <div className="project-card">
                  <h3>Loan Amortization Calculator</h3>
                  <a
                    href="https://ud-f24-cisc181.github.io/final-project-phase-2-iguy1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Loan Amortization Calculator
                  </a>
                  <p>This was a school final project for my TypeScript class, written using a React-like framework.</p>
                </div>
                <div className="project-card">
                  <h3>Personal Photography Website</h3>
                  <a
                    href="https://iguy1.github.io/iguypictures"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Photography Website
                  </a>
                  <p>
                    I created this React application to upload my personal photography ventures at the University of Delaware.
                  </p>
                </div>
                <div className="project-card">
                  <h3>Society For Professional Computing</h3>
                  <a
                    href="https://iguy1.github.io/compsciclub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Club Website
                  </a>
                  <p>
                    I created this React application for a school club I recently joined. It provides an easy-to-navigate
                    webpage for current members and people interested in joining.
                  </p>
                </div>
              
              </div>
            </section>
          );
        }
        
  



export {NewPage,Languages,Vote,Projects};