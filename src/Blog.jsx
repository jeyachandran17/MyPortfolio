import { useNavigate, Link } from "react-router-dom";
import nodedownloadpage from "./images/nodejs/nodejs1.png"
import nodeinstallpage1 from "./images/nodejs/nodejs2.png"
import nodeinstallpage2 from "./images/nodejs/nodejs3.png"
import nodeinstallpage3 from "./images/nodejs/nodejs4.png"
import nodeinstallpage4 from "./images/nodejs/nodejs5.png"
import nodeinstallpage5 from "./images/nodejs/nodejs6.png"
import nodeinstallpage6 from "./images/nodejs/nodejs7.png"
import nodeinstallpage7 from "./images/nodejs/nodejs8.png"
import nodeinstallpage8 from "./images/nodejs/nodejs9.png"
import nodeinstallpage9 from "./images/nodejs/nodejs10.png"
import nodeinstallpage10 from "./images/nodejs/nodejs11.png"
import './App.css'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export function Blog() {
  const navigate = useNavigate('')
  return (
    <div className='blog-container'>
      <div className="blog-title">
        <h3 className="blog-title">All Blogs</h3>
      </div>
      <div className="blog-titleCards">
        {/* nodejs install in windows */}
        <div className="Blog-node-install">
          <Card sx={{ maxWidth: 345 }} onClick={()=>navigate('/blog-nodejs')}>
            <CardMedia component="img" alt="green iguana" height="140" image="https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div"> How to install nodejs in windows</Typography>
              <Typography variant="body2" color="text.secondary">
                Node. js is a popular programming environment that can be used for building high-scale applications that need to support multiple concurrent requests
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" size="small" style={{marginLeft:"auto"}} onClick={()=>navigate('/blog-nodejs')}>View</Button>
            </CardActions>
          </Card>
        </div>
        {/*  Local setup Git in windows */}
        <div className="Blog-Git-install">
          <Card sx={{ maxWidth: 345 }} onClick={()=>navigate('/blog-gitinstall')}>
            <CardMedia component="img" alt="green iguana" height="140" image="https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header-768x432.png" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div"> How to install Git in Local Setup </Typography>
              <Typography variant="body2" color="text.secondary">
                Git helps you keep track of code changes. Git is used to collaborate on code.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" size="small" style={{marginLeft:"auto"}} onClick={()=>navigate('/blog-gitinstall')}>View</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function NodejsInstall(){
  const navigate = useNavigate();
  return(
    <div className="node-container">
      <div className="blog-title">
        <h3>How to install node in windows</h3>
      </div>
      <div className="node-contant">
        <div className="node-steps">
          <div>
            <h3>You have to follow the following steps to install the Node.js on your Windows</h3>
          </div>
          <div className="nodejs-step">
            <p>Step 1:</p>
            <p className="nodejs-text">Visit the official Node.js website <a className="blog-link" href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a>  and download the .msi file according to your system environment (32-bit & 64-bit).</p>
            <img className="nodejs"  src={nodedownloadpage} alt="nodejs download page" />
          </div>
          <div className="nodejs-step">
            <p>Step 2:</p>
            <p className="nodejs-text">Now you need to install the node.js installer on your PC. Double click on the .msi installer.</p>
            <p className="nodejs-text">Welcome To Node.js Setup Wizard</p>
            <img className="nodejs" src={nodeinstallpage1} alt="" />
            <p className="nodejs-text">✔️Select Next</p>
          </div>
          <div className="nodejs-step">
            <img className="nodejs" src={nodeinstallpage2} alt="" />
            <p className="nodejs-text">Check “✅I accept the terms in the License Agreement” & "✔️Select Next"</p>
          </div>
          <div className="nodejs-step">
            <img className="nodejs" src={nodeinstallpage3} alt="" />
            <p className="nodejs-text">✔️Select Next</p>
          </div>
          <div>
            <img className="nodejs" src={nodeinstallpage4} alt="" />
            <p className="nodejs-text">✔️Select Next</p>
          </div>
          <div className="nodejs-step">
            <img className="nodejs" src={nodeinstallpage5} alt="" />
            <p className="nodejs-text">If optional one is. click "Automatically install the necessary tools. Note that this will also install chocolatey. The script will pop-up in a new windows after the installation completes." and ✔️"Select Next"</p>
            <p style={{textAlign:"center"}}>(or)</p>
            <p className="nodejs-text">✔️Select Next</p>
          </div>
          <div className="nodejs-step">
            <img className="nodejs" src={nodeinstallpage6} alt="" />
            <p className="nodejs-text">✔️Select Install</p>
          </div>
          <div className="nodejs-step">
            <img className="nodejs" src={nodeinstallpage7} alt="" />
            <p className="nodejs-text">Wait little bit time to installation on your computer</p>
          </div>
          <div className="nodejs-step">
            <img className="nodejs" src={nodeinstallpage8} alt="" />
            <p className="nodejs-text">✔️Select Finish</p>
          </div>
          <div className="nodejs-step">
            <img className="nodejs" src={nodeinstallpage9} alt="" />
            <p className="nodejs-text">Now click start button and search cmd, than open the command prompt</p>
          </div>
          <div className="nodejs-step">
            <img className="nodejs" src={nodeinstallpage10} alt="" />
            <p className="nodejs-text">👨‍💻type "node -v",Now you see the current version</p>
          </div>
          <div className="nodejs-step">
            <p className="nodejs-text">🎉🎉The nodejs successfully install in your computer🎉🎉</p>
          </div>
        </div>
        <div className="backButton">
          <Button variant="outlined" onClick={()=>navigate('/blog')}>🔙</Button>
        </div>
      </div>
    </div>
  );
}


export function GitLocalSetup(){
  return(
    <div className="Git-localSetup-container">
      <div className="blog-gitLocalSetup-title">
        <h3>How to install Git in Local Setup for Windows</h3>
      </div>
    </div>
  );
}