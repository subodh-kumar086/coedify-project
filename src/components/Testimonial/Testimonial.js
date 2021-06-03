import React from 'react';
import './testStyle.css';

function Testimonial() {
    return (
        <>
            <div className="testHeader">
                <h2>Customer testimonials</h2>
                <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis <br/>
                semper quis lectus nulla at volutpat diam ut venenatis tellus—in
                <br/> ornare.</p>
            </div>
            <div className="Container2">
                
                    <div className="testnomialBoxes">
                        <span className="comma">"</span>
                        <p>--Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.</p>
                        <hr/>
                        <span>Roman Level / AppName</span>
                    </div>
                    <div className="testnomialBoxes">
                        <span className="comma">"</span>
                        <p>--Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.</p>
                        <hr/>
                        <span>Diana Rynzhuk / AppName</span>
                    </div>
                    <div className="testnomialBoxes">
                        <span className="comma">"</span>
                        <p>--Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.</p>
                        <hr/>
                        <span>Ben Stafford / AppName</span>
                    </div>
            </div>

            <div className="divEmail">
                <div className="left"><p>For previewing layouts and visual?</p></div>
                <div className="right"><input type="text" placeholder="Your Best Email"/></div>

                
            </div>
            
        </>
    )
}

export default Testimonial
