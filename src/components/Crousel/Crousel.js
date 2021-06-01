import React from 'react';
import './style.css';
import imgsrc from '../images/split-image-01.png';

function Crousel() {
    return (
        <>
            <div className="crouselHeader">
                <h1>Workflow that just works</h1>
                <p>Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui <br/>officia deserunt mollit anim id est
                  laborum — semper quis lectus<br/> nulla at volutpat diam ut venenatis.</p>
            </div>
            <div className="crouselBody">
                <div className="leftColumn">
                <span className="light">LIGHTNING FAST WORKFLOW</span>
                <h2>Data-driven insights</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> 
                elit, sed do eiusmod tempor incididunt ut labore et<br/> dolore magna aliqua — Ut enim ad minim veniam,
                <br/> quis nostrud exercitation ullamco laboris nisi ut<br/> aliquip ex ea commodo consequat.</p>
                </div>
                <div className="rightColumn">
                    <img src={imgsrc} alt='first' className='image1'/>
                
                </div>

                <div className="leftColumn">
                    <img src={imgsrc} alt='first' className='image1'/>
                
                </div>
                <div className="Column">
                <span className="light">LIGHTNING FAST WORKFLOW</span>
                <h2>Data-driven insights</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> 
                elit, sed do eiusmod tempor incididunt ut labore et<br/> dolore magna aliqua — Ut enim ad minim veniam,
                <br/> quis nostrud exercitation ullamco laboris nisi ut<br/> aliquip ex ea commodo consequat.</p>
                </div>
                
            </div>
            
        </>
    )
}

export default Crousel
