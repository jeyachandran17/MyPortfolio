import { useNavigate } from "react-router-dom";


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
      <div className="">
        <h3>How to install node in windows</h3>
      </div>
    </div>
  );
}
