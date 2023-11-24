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
import gitdownloadpage from "./images/git/gitdownloadpage.png"
import gitinstallpage1 from "./images/git/gitlocalsetup1.png"
import gitinstallpage2 from "./images/git/gitlocalsetup2.png"
import gitinstallpage3 from "./images/git/gitlocalsetup3.png"
import gitinstallpage4 from "./images/git/gitlocalsetup4.png"
import gitinstallpage5 from "./images/git/gitlocalsetup5.png"
import gitinstallpage6 from "./images/git/gitlocalsetup6.png"
import gitinstallpage7 from "./images/git/gitlocalsetup7.png"
import gitinstallpage8 from "./images/git/gitlocalsetup8.png"
import gitinstallpage9 from "./images/git/gitlocalsetup9.png"
import gitinstallpage10 from "./images/git/gitlocalsetup10.png"
import gitinstallpage11 from "./images/git/gitlocalsetup11.png"
import gitinstallpage12 from "./images/git/gitlocalsetup12.png"
import gitinstallpage13 from "./images/git/gitlocalsetup13.png"
import gitinstallpage14 from "./images/git/gitlocalsetup14.png"
import gitinstallpage15 from "./images/git/gitlocalsetup15.png"
import gitinstallpage16 from "./images/git/gitlocalsetup16.png"
import gitinstallpage17 from "./images/git/gitlocalsetup17.png"
import gitinstallpage18 from "./images/git/gitlocalsetup18.png"
import gitinstallpage19 from "./images/git/gitlocalsetup19.png"
import gitinstallpage20 from "./images/git/gitlocalsetup20.png"
import gitinstallpage21 from "./images/git/gitlocalsetup21.png"
import gitinstallpage22 from "./images/git/gitlocalsetup22.png"

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
  const navigate = useNavigate("")
  return(
    <div className="Git-localSetup-container">
      <div className="blog-gitLocalSetup-title">
        <h3>How to install Git in Local Setup for Windows</h3>
      </div>
      <div className="blog-gitLocalSetup-contant">
        <div>
          <h3>You have to follow the following steps to install the Git & Set config local on your Windows</h3>
        </div>
        <div>
          <h3>Step 1:</h3>
          <p className="git-text">Visit the official Git website <a href="https://git-scm.com/downloads">https://git-scm.com/downloads</a> and download the Latest source Release. </p>
          <img className="git" src={gitdownloadpage} alt="Git download page" />
        </div>
        <div>
          <h3>Step 2:</h3>
          <p className="git-text">Now you need to install the Git installer on your PC. Double click on the Git installer.</p>
          <img className="git" src={gitinstallpage1} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage2} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage3} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage4} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <p>Choose to "Use visual studio code as Git's default editor" </p>
          <img className="git" src={gitinstallpage5} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage6} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage7} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage8} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage9} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage10} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage11} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage12} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage13} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage14} alt="" />
          <p className="git-text">✔️Select Next</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage15} alt="" />
          <p className="git-text">✔️Select Install</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage16} alt="" />
          <p className="git-text">Waiting for little bit time to installing process.</p>
        </div>
        <div>
          <img className="git" src={gitinstallpage17} alt="" />
          <p className="git-text">✔️Select Finish</p>
          <p className="git-text">🎉🎉The Git successfully install in your computer🎉🎉</p>
        </div>
        <div>
          <h3>Step 3:</h3>
          <p className="git-text">Now Right click on any window page in your computer and Select "Open Git Bash here" </p>
          <img src={gitinstallpage18} alt="" />
        </div>
        <div>
          <p className="git-text">Now Git terminal is start in your computer</p>
          <img className="git" src={gitinstallpage19} alt="" />
        </div>
        <div>
          <p className="git-text">Now, Check Git version type the command "git --version" </p>
          <img className="git" src={gitinstallpage20} alt="" />
        </div>
        <div>
          <h3>Step 4:</h3>
          <h3>Configure GitHub Credentials</h3>
          <p className="git-text">You can configure your local GitHub installation with credentials by using the following commands. Also, don't forget to add your own GitHub credentials for username and email address.</p>
          <p className="git-text">git config --global user.name "your github username" </p>
          <img className="git" src={gitinstallpage21} alt="" />
        </div>
        <div>
          <p className="git-text">git config --global user.email "your email address"</p>
          <img className="git" src={gitinstallpage22} alt="" />
          <p className="git-text">🎉🎉Successfully Set the Git Config in your Local Setup🎉🎉</p>
        </div>
        <div className="backButton">
          <Button variant="outlined" onClick={()=>navigate('/blog')}>🔙</Button>
        </div>
      </div>
    </div>
  );
}