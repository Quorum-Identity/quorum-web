import React from "react";
import  './footer.css';
import  logo  from "../../assets/logo2.png"
import IonIcon from "@reacticons/ionicons";
const FooterApp = () => {
    return (
        <div className="footer">
        <div className="displayFlex between displayBlockResponsive">
            
            <div>
                <img style={{filter: 'saturate(2)'}} width="310px" height="80px" alt="logo" src={logo}/>
                
            </div>
            <div className="footer-items">
                <div className="section">
                    <h1>UTIL LINKS</h1>
                    <p>Our team</p>
                    <p>Work with us</p>
                </div>
                <div className="section">
                    <h1>CONTACT</h1>
                    <p>canitrotbartolome@gmail.com</p>
                    <p>+39 333584593</p>
                </div>
                <div className="section">
                    <h1>RESOURCES</h1>
                    <p>Privacy Policy</p>
                    <p>Community Rules</p>
                </div>

                

                
            </div>
            
            
                
        </div>
        
        </div>
    )
}
export default FooterApp;