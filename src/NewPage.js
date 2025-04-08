import React, {useState} from 'react';
import Ian from './images/IMG_0229.jpeg';
import learning from './images/learning.gif';
import exercise from './images/exercise.gif';
import './NewPage.css';
import './App.css';
import v0logo from './images/v0.png';
import cursorlogo from './images/cursor.jpg';
import clionlogo from './images/clion.png';

 
function NewPage(){
    return(
        <div className = 'newpage'>
            <h1>About Me</h1>
            
            <div className="about-section">
                <div className="about-image">
                    <img src={Ian} alt="Ian Guy" className="profile-image"/>
                </div>
                
                <div className="about-content">
                    <h2>Background</h2>
                    <p>I am a Computer Science student at the University of Delaware, passionate about technology and software development. I enjoy the creative and problem-solving aspects of programming, which allow me to build innovative solutions.</p>
                    
                    <h2>Interests & Hobbies</h2>
                    <p>Beyond coding, I'm dedicated to continuous learning and personal development. I maintain an active lifestyle through regular exercise, which helps me stay focused and energized for my studies and projects.</p>
                    
                    <div className="interests-images">
                        <div className="interest-item">
                            <img src={learning} alt="Learning" className="interest-image"/>
                            <p>Continuous Learning</p>
                        </div>
                        <div className="interest-item">
                            <img src={exercise} alt="Exercise" className="interest-image"/>
                            <p>Fitness & Wellness</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="contact-section">
                <h2>Contact Information</h2>
                <div className="contact-details">
                    <div className="contact-item">
                        <i className="contact-icon">📧</i>
                        <p>Email: <a href="mailto:ianguy015@gmail.com">ianguy015@gmail.com</a></p>
                    </div>
                    <div className="contact-item">
                        <i className="contact-icon">📱</i>
                        <p>Phone: <a href="tel:302-893-8963">302-893-8963</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Languages(){
    return(
        <div className = 'languages'>
            <h1>My Tech Stack</h1>
            <h2>Programming Languages</h2>
            <p>Here are the programming languages I am familiar with:</p>
            <div className="tech-stack">
                <div className="tech-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python" />
                    <p>Python</p>
                </div>
                <div className="tech-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="C++" />
                    <p>C++</p>
                </div>
                <div className="tech-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" alt="C" />
                    <p>C</p>
                </div>
                <div className="tech-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div className="tech-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" />
                    <p>TypeScript</p>
                </div>
                <div className="tech-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React" />
                    <p>React</p>
                </div>
                <div className="tech-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" alt="HTML" />
                    <p>HTML</p>
                </div>
                <div className="tech-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png" alt="CSS" />
                    <p>CSS</p>
                </div>
            </div>
            <h2>Frameworks & Tools</h2>
            <p>Here are some frameworks and tools I use:</p>
            
            <h3>IDEs & Code Editors</h3>
            <div className="tech-stack">
                <div className="tech-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" alt="VS Code" />
                    <p>VS Code</p>
                </div>
                <div className="tech-item">
                    <img src={clionlogo} alt="CLion" />
                    <p>CLion</p>
                </div>
            </div>
            
            <h3>AI-Powered Development Tools</h3>
            <div className="tech-stack">
                <div className="tech-item">
                    <img src={v0logo} alt="V0" />
                    <p>V0</p>
                </div>
                <div className="tech-item">
                    <img src={cursorlogo} alt="Cursor" />
                    <p>Cursor</p>
                </div>
            </div>
            
            <h3>Version Control & Collaboration</h3>
            <div className="tech-stack">
                <div className="tech-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" />
                    <p>Git</p>
                </div>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <h2>Here are some of the projects I've worked on:</h2>
            <div className="project-grid">
                <div className="project-card">
                    <h3>Personal Portfolio Page</h3>
                    <p>This is my first personal creation with many more exciting projects on the way!</p>
                    <p>This website was created using React.</p>
                    <a href="https://github.com/iguy1/portfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
                <div className="project-card">
                    <h3>Loan Amortization Calculator</h3>
                    <p>This was a school final project for my TypeScript class, written using a React-like framework.</p>
                    <a
                        href="https://ud-f24-cisc181.github.io/final-project-phase-2-iguy1/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>
                <div className="project-card">
                    <h3>Personal Photography Website</h3>
                    <p>I created this React application to upload my personal photography ventures at the University of Delaware.</p>
                    <a
                        href="https://iguy1.github.io/iguypictures"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>
                <div className="project-card">
                    <h3>Society For Professional Computing</h3>
                    <p>I created this React application for a school club I recently joined. It provides an easy-to-navigate webpage for current members and people interested in joining.</p>
                    <a
                        href="https://iguy1.github.io/compsciclub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>
                <div className="project-card">
                    <h3>Mental Health App</h3>
                    <p>A hackathon project focused on mental health and wellness, providing tools and resources for users to manage their mental well-being.</p>
                    <a
                        href="https://sprightly-starburst-efc9fc.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>
                <div className="project-card">
                    <h3>GameHub</h3>
                    <p>A platform for gamers to discover, play, and share games. Built with modern web technologies to provide an engaging gaming experience.</p>
                    <a
                        href="https://iguy1.github.io/gamehub/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
}

export { NewPage, Languages, Projects };