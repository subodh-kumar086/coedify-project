import React from 'react';
import VidioData from '../Video/VidioData';
import './style.css';
//import videoImg from "../images/1.jpg";

function Header() {
    return (
    <> 
        <div className="header">
            <h2>CoEdify <span className="tech">Technology</span></h2>
            <p className="tagline">Our landing page template works on all devices, so you only have <br/>to set it up once, and get beautiful results forever.</p>
            <div className="btnGroup">
                  <button>Get started</button>&nbsp;&nbsp;
                  <button>View on Github</button>
            </div>
        </div>
        <div className="divVideo">
            {/* <img src={videoImg} alt="clicked the video to play" className="videoImg"/> */}
            <VidioData />

        </div>
        <div className="header1">
            <h1>Build up the whole picture</h1>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui<br/>
            officia deserunt mollit anim id est laborum — semper quis lectus<br/>
            nulla at volutpat diam ut venenatis.</p>
        </div>
        
    </>
    )
}

export default Header
