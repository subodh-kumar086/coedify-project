import React from 'react';
import './style.css';
import CardData from '../CardData';


function Data() {
   return (
    <>
        <div className="container1">
            {
                CardData.map((Item) => {
                    return(
                        <div className="divBox">
                            <div className="imgBox">
                                <img src={Item.imgSrc} alt="first" className="firstImg"/>
                            </div>
                            <div className="titleDiv">
                                <h3>{Item.title}</h3>
                            </div>
                            <div className="bodyDiv">
                                <p>{Item.Body}</p>
                            </div>
                        </div>
                    );
                    
                    
                })
            }
        </div>
    </>
    )
}

export default Data
