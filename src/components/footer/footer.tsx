import React from "react";
import  './footer.css';
import  logo  from "../../assets/logomodern2.png"
import IonIcon from "@reacticons/ionicons";
import { Link, useNavigate } from "react-router-dom";
const FooterApp = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
        <div className="displayFlex between displayBlockResponsive">
            
            
            <div className="footer-items">
                <div className="section">
                    <h1>UTIL LINKS</h1>
                    <p onClick={() => navigate('/staff')}>Team</p>
                    <p onClick={() => navigate('/pricing')}>Pricing</p>
                    <p onClick={() => navigate('/fq')}>Frequent Questions</p>
                    <p onClick={() => navigate('/')}>Home</p>



                </div>
                
                <div className="section">
                    <h1>RESOURCES</h1>
                    <Link to="/privacy-rules"><p>Privacy Policy</p></Link>
                    <p onClick={() => navigate('/contact')}>Contact</p>
                    <p onClick={() => navigate('/fq')}>Forgot Password</p>
                    <p onClick={() => navigate('/login')}>Login</p>

                </div>

                

                
            </div>
            
            <div>
                <img className="footer-logo" style={{filter: 'saturate(2)'}} width="350px" height="175px" alt="logo" src={logo}/>
                
            </div>
                
        </div>
        
        </div>
    )
}
export default FooterApp;