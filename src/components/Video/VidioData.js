import React from 'react';
import ReactPlayer from 'react-player';
import "./Vstyle.css";


function VidioData() {
    return (
        <div className="player-wrapper">
            <ReactPlayer className="react-player"
            url="https://www.youtube.com/watch?v=KNpp6Q6Wxog"
            width="80%"
            height="80%"/>          
        </div>
    )
}

export default VidioData
