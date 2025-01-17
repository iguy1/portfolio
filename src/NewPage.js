import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Ian from './images/IMG_0229.jpeg';
import Iguy from './images/IMG_9559.jpeg';
import lebron from './images/lebron.gif';
import jordan from './images/jordan.gif';
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
            <Link to = "/projects"><button>Projects!!</button></Link>
            <br />
            <br />
            <Link to = "/facts"><button>Facts about ME!</button></Link>
            <br />
            <br />
            <Link to = "/vote"><button>Vote!!</button></Link>
            <br />
            <br />
            <Link to = "/"><button>Home</button></Link>

        </div>
    );
}

function Facts(){
    return(
        <div className = 'facts'>
            <h1>FACTS ABOUT ME!</h1>
            <img src={Iguy} alt="Ian" style = {{width:'200px', height:'auto'}}/>
            <p>My interest are learning new things and exercise!</p>
            <p>I am proficient in coding languages such as Python, Typescript, and C.</p>
            <p>I am also learning React which I am using to make this website!    </p>
            <br />
            <Link to = "/tvshow"><button>TV Shows📺</button></Link>
            <br />
            <br />
            <Link to = "/sports"><button>Sports🏈</button></Link>
            <br />
            <br />
            <Link to = "/newpage"><button>Back</button></Link>
            <br />
            <br />
            <Link to = "/"><button>Home</button></Link>
            <br />


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
            <Link to = "/newpage"><button>Back</button></Link>
            <br />
            <Link to = "/"><button>Home</button></Link>
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
            <h3>2. Loan Automorzation Calculator</h3>
            <p>This was a school final project for my TypeScript class, written using a react-like framework created by professors.</p>
            <Link to = "/newpage"><button>Back</button></Link>
            <br />
            <Link to = "/"><button>Home</button></Link>
            
        </div>
    )
}

export {NewPage,Facts,Vote,Projects};