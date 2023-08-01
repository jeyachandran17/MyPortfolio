import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';



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
            <Link className='link' to={"/"} style={{marginLeft:"auto"}}>Home</Link>
        </Toolbar>
      </AppBar>
      </nav>
      <div className="profile">
        <Profile />
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
    </div>
  );
}


export default App
