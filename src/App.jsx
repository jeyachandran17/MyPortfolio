import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ReactIcon from './images/react.png'
import NodejsIcon from './images/node-js.png'
import MongodbIcon from './images/mongodb.png'
import GitIcon from './images/git.png'
import HTML5Icon from './images/html.png'
import CSS3Icon from './images/css3.png'
import JSIcon from './images/javascript.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function App() {

  return (
    <div className="App">
      <Application />
    </div>
  )
}


function Application() {
  return (
    <div className="application">
      <div className="navigation-container">
        <Navigation />
      </div>
    </div>
  );
}


function Navigation() {
  return (
    <div className="navigation">
      <nav>
      <AppBar style={{background:"transparent"}} position="static">
        <Toolbar>
            {/* create the links for webpage */}
            <p><span className='fn'>Jeya</span><span className='ln'>chandran C</span></p>
            <a className='link' href="/" style={{marginLeft:"auto"}}>Home</a>
            <a className='link' href="#contect" >Contect</a>
        </Toolbar>
      </AppBar>
      </nav>
      <div className="profile">
        <Profile />
        <SkillAndTools />
        <Contect />
      </div>
    </div>
  );
}


function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <p>Welcome to my page...</p>
        <p>I'm JEYACHANDRAN</p>
        <p>I'm Mean stack devoloper and Motivational speeker,</p>
        <p>Everytime i work at try to my best and solve the problems.</p>
      </div>
      <div className="contect-me">
        <a class="contect" href="mailto:jeyachandran1733@gmail.com"><MailOutlineIcon />Contect Me</a>
      </div>
    </div>
  );
}


function SkillAndTools() {
  return (
    <div className="skill-tools-container">
      <div className="skill-tools-title-container">
        <h2>Skills & Tools</h2>
        <p>I know learned some tools and skills for my knowledge it's bellow..</p>
      </div>
      <div className="skill-tools-image-container">
        <div className="skill-tools-image-box">
          <img className='iconImage' src={ReactIcon} alt="React" />
          <h3>React</h3>
        </div>
        <div className="skill-tools-image-box">
          <img className='iconImage' src={NodejsIcon} alt="Node js" />
          <h3>Node js</h3>
        </div>
        <div className="skill-tools-image-box">
          <img className='iconImage' src={MongodbIcon} alt="Mongodb" />
          <h3>MongoDB</h3>
        </div>
        <div className="skill-tools-image-box">
          <img className='iconImage' src={GitIcon} alt="Git" />
          <h3>Git</h3>
        </div>
        <div className="skill-tools-image-box">
          <img className='iconImage' src={HTML5Icon} alt="HTML5" />
          <h3>HTML5</h3>
        </div>
        <div className="skill-tools-image-box">
          <img className='iconImage' src={CSS3Icon} alt="CSS3" />
          <h3>CSS3</h3>
        </div>
        <div className="skill-tools-image-box">
          <img className='iconImage' src={JSIcon} alt="JavaScript" />
          <h3>JavaScript</h3>
        </div>
      </div>
    </div>
  );
}

function Contect() {
  return (
    <div id='contect' className="contect-container">
      <div className="contect-title-container">
        <h2>Contect Us</h2>
      </div>
      <div className="socialmedia-container">
        <div className="media-follow-container">
          <div className="follow-title-container">
            <h3>Follow</h3>
          </div>
          <div className="follow-link-container">
            <a href="https://github.com/jeyachandran17"><GitHubIcon fontSize='large' /></a>
            <a href="https://www.linkedin.com/in/jeyachandran-c-604186265/"><LinkedInIcon fontSize='large' /></a>
          </div>
        </div>
        <div className="mail-container">
          <h3>Chat to us</h3>
          <p className='mail-address'><MailOutlineIcon fontSize='large' />jeyachandran1733@gmail.com</p>
        </div>
      </div>
      <div className="copyright-container">
        <p><span className='fn'>Jeya</span><span className='ln'>chandran C</span></p>
        <h3>&copy; 2023 Jeyachandran C. All rights reserved.</h3>
      </div>
    </div>
  );
}

export default App
