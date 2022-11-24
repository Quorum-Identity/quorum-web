import React from "react";
import  './footer.css';
import { Youtube } from "react-feather";
const FooterApp = () => {
    return (
        <div className="footer">
            <div className="footer-brand">
                <h1>Broadway</h1>
                <Youtube size='2rem' color="#D13030"></Youtube>
            </div>
            
            <div className="footer-items">
                <div className="section">
                    <h1>Made by</h1>
                    <p>Manhattan - Roleplay Game</p>
                    <p>Crafters - The Fight!</p>
                </div>
                <div className="section">
                    <h1>Contact</h1>
                    <p>broadwaygames@gmail.com</p>
                    <p>+39 333584593</p>
                </div>
                <div className="section">
                    <h1>Resources</h1>
                    <p>Privacy Policy</p>
                    <p>Community Rules</p>
                </div>

                

                
            </div>
            
                
        </div>
    )
}
export default FooterApp;