import React from 'react';
import './footerStyle.css';

function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="inner-footer">
                <div className="social-link">
                    <ul>
                        <li className="social-items"><a href=""><i class="fab fa-facebook"></i></a></li>
                        <li className="social-items"><a href=""><i class="fab fa-twitter-square"></i></a></li>
                        <li className="social-items"><a href=""><i class="fab fa-instagram"></i></a></li>
                        <li className="social-items"><a href=""><i class="fab fa-tumblr-square"></i></a></li>
                        
                    </ul>
                </div>
                <div className="quick-links">
                    <ul>
                        <li className="quick-items"><a href="">Contact us</a></li>
                        <li className="quick-items"><a href="">About us</a></li>
                        <li className="quick-items"><a href="">FAQ's</a></li>
                        <li className="quick-items"><a href="">Support</a></li>
                    </ul>
                </div>
            </div>
            <div className="outer-footer">
                Copyright &copy; Made by CoEdify. All right Reserved
            </div>
        </footer>
            
        </>
    )
}

export default Footer
