import { useNavigate } from "react-router-dom";
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

export function Blog() {
  const navigate = useNavigate('')
  return (
    <div className='blog-container'>
      <div className="blog-title">
        <h3 className="blog-title">All Blogs</h3>
      </div>
      <div className="blog-titleCards">
        <NodejsInstall />
      </div>
    </div>
  );
}

function NodejsInstall(){
  return(
    <div className="node-container">
      <div className="blog-title">
        <h3>How to install node in windows</h3>
      </div>
      <div className="node-contant">
        <div className="node-steps">
          <div>
            <p>You have to follow the following steps to install the Node.js on your Windows</p>
          </div>
          <div>
            <p>Step 1:</p>
            <p>Visit the official Node.js website <a className="blog-link" href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a>  and download the .msi file according to your system environment (32-bit & 64-bit).</p>
            <img style={{height:"350px",width:"600px"}} src={nodedownloadpage} alt="nodejs download page" />
          </div>
          <div>
            <p>Step 2:</p>
            <p>Now you need to install the node.js installer on your PC. Double click on the .msi installer.</p>
            <p>Welcome To Node.js Setup Wizard</p>
            <img style={{height:"300px",width:"450px"}} src={nodeinstallpage1} alt="" />
            <p>Select Next</p>
          </div>
          <div>
            <img style={{height:"300px",width:"450px"}} src={nodeinstallpage2} alt="" />
            <p>Check “I accept the terms in the License Agreement” and Select Next</p>
          </div>
          <div>
            <img style={{height:"300px",width:"450px"}} src={nodeinstallpage3} alt="" />
            <p>Select Next</p>
          </div>
          <div>
            <img style={{height:"300px",width:"450px"}} src={nodeinstallpage4} alt="" />
            <p>Select Next</p>
          </div>
          <div>
            <img style={{height:"300px",width:"450px"}} src={nodeinstallpage5} alt="" />
            <p>If optional one is. click "Automatically install the necessary tools. Note that this will also install chocolatey. The script will pop-up in a new windows after the installation completes." and Select Next</p>
            <p>(or)</p>
            <p>Select Next</p>
          </div>
          <div>
            <img style={{height:"300px",width:"450px"}} src={nodeinstallpage6} alt="" />
            <p>Select Install</p>
          </div>
          <div>
            <img style={{height:"300px",width:"450px"}} src={nodeinstallpage7} alt="" />
            <p>Wait little bit time to installation on your computer</p>
          </div>
          <div>
            <img style={{height:"300px",width:"450px"}} src={nodeinstallpage8} alt="" />
            <p>Select Finish</p>
          </div>
          <div>
            <img style={{height:"300px",width:"450px"}} src={nodeinstallpage9} alt="" />
            <p>Now click start button and search cmd, than open the command prompt</p>
          </div>
          <div>
            <img style={{height:"300px",width:"450px"}} src={nodeinstallpage10} alt="" />
            <p>type "node -v",Now you see the current version</p>
          </div>
          <div>
            <p>The nodejs successfully install in your computer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
