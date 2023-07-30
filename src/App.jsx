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
      <AppBar position="static">
        <Toolbar>
          {/* create the links for webpage */}
        </Toolbar>
      </AppBar>
      </nav>
    </div>
  );
}


export default App
