import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import MyImage from './images/my_image.png'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



function App() {
  return (
      <div className="App">
        <Application />
      </div>
  )
}



function Application() {
 
  const navigate = useNavigate()

  const [show, setshow] = useState(true);

  const darkTheme = createTheme({
  palette: {
    mode: show ? 'dark' : 'light',
    },
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
       <Paper elevation={4} >
        <div className="navigation">
          <nav>
            <AppBar  position="static">
              <Toolbar className='AppBar'>
                <div>
                  <p><span className='fn'>Jeya</span><span className='ln'>chandran C</span></p>
                </div>
                <div style={{marginLeft:"auto"}}>
                  <Link className='link' to="/" >Home</Link>
                </div>
                <div>
                  <Link className='link' to="/blog" style={{ marginLeft: "15px" }}>Blog</Link>
                </div>
                <div>
                  <IconButton className='themebutton' color="inherit" onClick={() => setshow(!show)} >{show ? <BrightnessHighIcon style={{ color: "orange" }} /> : <Brightness4Icon style={{ color: "dodgerblue" }} />}</IconButton>
                </div>
                <div sx={{ mr: 1 }} className='menu-icon' >
                  <IconButton size="large" edge="start" color="inherit" aria-label="menu" id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} ><MenuIcon /></IconButton>
                  <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button',}}>
                    <MenuItem onClick={()=>navigate('/')}>Home</MenuItem>
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<Blog />} />
            </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Homepage() {
  return (
    <div className="profile">
      <Profile />
      <SkillAndTools />
      <Contect />
    </div>
  );
}


function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-contant-conainer">
        <div className="profile-content">
          <p>Welcome to my page...</p>
          <p>I'm JEYACHANDRAN</p>
          <p>I'm Mean stack devoloper and Motivational speeker,</p>
          <p>Everytime i work at try to my best and solve the problems.</p>
        </div>
        <div className="contect-me">
          <a class="contect" href="mailto:jeyachandran1733@gmail.com"><MailOutlineIcon />Contact Me</a>
        </div>
      </div>
      <div className="profile-image-container">
        <img src={MyImage} alt="my image"  width={250}/>
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

        <Card>
          <CardContent>
            <div className="skill-tools-image-box">
              <img className='iconImage' src={ReactIcon} alt="React" />
              <h3>React</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="skill-tools-image-box">
              <img className='iconImage' src={NodejsIcon} alt="Node js" />
              <h3>Node js</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="skill-tools-image-box">
              <img className='iconImage' src={MongodbIcon} alt="Mongodb" />
              <h3>MongoDB</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="skill-tools-image-box">
              <img className='iconImage' src={GitIcon} alt="Git" />
              <h3>Git</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="skill-tools-image-box">
              <img className='iconImage' src={HTML5Icon} alt="HTML5" />
              <h3>HTML5</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="skill-tools-image-box">
              <img className='iconImage' src={CSS3Icon} alt="CSS3" />
              <h3>CSS3</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="skill-tools-image-box">
              <img className='iconImage' src={JSIcon} alt="JavaScript" />
              <h3>JavaScript</h3>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

function Contect() {
  return (
    <div id='contact' className="contect-container">
      <div className="contect-title-container">
        <h2>Contect Us</h2>
      </div>
      <div className="socialmedia-container">
        <div className="media-follow-container">
          <div className="follow-title-container">
            <div className="contact-logo">
              <p><span className='fn'>Jeya</span><span className='ln'>chandran C</span></p>
            </div>
          </div>
          <div className="follow-link-container">
            <div className="follow-title">
              <h3>Follow</h3>
            </div>
          </div>
          <div>
            <a href="https://github.com/jeyachandran17"><GitHubIcon fontSize='large' /></a>
            <a href="https://www.linkedin.com/in/jeyachandran-c-604186265/"><LinkedInIcon fontSize='large' /></a>
          </div> 
        </div>
        <div className="mail-container">
          <h3>Chat to us</h3>
          <p className='mail-address'><MailOutlineIcon fontSize='large' />jeyachandran1733@gmail.com</p>
          <h3>&copy; 2023 Jeyachandran C. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <h3>Welcome</h3>
  );
}

export default App
