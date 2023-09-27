import React from "react";
import  './footer.css';
import  logo  from "../../assets/logomodern2.png"
import IonIcon from "@reacticons/ionicons";
import { Link, useNavigate } from "react-router-dom";
const FooterApp = ({t,i18n}:any) => {
    const navigate = useNavigate();
    return (
        <div className="footer">
        <div className="displayFlex between displayBlockResponsive">
            
            
            
            
            <div>
                <img className="footer-logo" style={{filter: 'saturate(2)'}} width="350px" height="175px" alt="logo" src={logo}/>
                
            </div>
            <div className="footer-items">
                <div className="section">
                    <h1>{t("21555.p1")}</h1>
                    <p>{t("2456.p1")}</p>
                    <p>{t("12121.p1")}</p>
                </div>
                <div className="section">
                    <h1>{t("55554.p1")}</h1>
                    <p>canitrotbartolome@gmail.com</p>
                    <p>+39 333584593</p>
                </div>
                <div className="section">
                    <h1>{t("6754.p1")}</h1>
                    <Link to="/privacy-rules"><p>{t("8741.p1")}</p></Link>
                    <p>{t("4131.p1")}</p>
                </div>

                

                
            </div>
            
            
                
        </div>
        
        </div>
    )
}
export default FooterApp;