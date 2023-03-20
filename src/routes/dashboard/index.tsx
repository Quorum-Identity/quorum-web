import Navbar from "../../components/navbar";
import './index.css';
import * as Icon from 'react-feather';
import CardVotation from "../../components/card_votation";
import IonIcon from "@reacticons/ionicons";
import FooterApp from "../../components/footer/footer";





const Dashboard = () => {
  

    return (
      <div className="dashboard-content">
        <Navbar/>
        <div className="circle-background"></div>          
        <div className="container"> 

          <div className="displayFlex between">
            <div className="w50 w100Responsive">
              <h1 className="fz3">Verifica la identidad de tus votantes en</h1>
              <h1 className="animate-title fz3">Blockchain</h1>
              <p className="fz1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="displayFlex displayBlockResponsive">
              <button className="social-button displayFlex">
                <IonIcon name="logo-apple"/>
                <div>
                  <p>Download on the</p>
                  <h1> App Store</h1>

                </div>
              </button>
              <button className="social-button displayFlex">
                <IonIcon name="logo-google-playstore"/>
                <div>
                  <p>Available on the</p>
                  <h1> Google Play</h1>

                </div>
              </button>
              </div>
              
            </div>
            <img className="displayNoneResponsive" src="https://www.yabok-tech.io/static/media/magicflex.ac7fd4ee.png" width="400px" height="543px"  alt="phoneImage"/>
          </div>
        </div>
        

        
        <div className="boxes-dashboard">
          <div className="box"></div>

          <div className="container">
            <div className="panel-dashboard displayFlex displayBlockResponsive separation-top">
              <img className="separation-top" src="https://microblink.com/wp-content/uploads/2023/02/BLINKID-img04-1-e1677213100175.png" alt="image-panel"></img>
              <div className="separation-top">
                <h1 className="fz1-5 p2"> Podras gestionar todo desde nuestra aplicacion</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="boxes-dashboard">
          <div className="box1"></div>

          <div className="container">
            <div className="panel-dashboard displayFlex displayBlockResponsive separation-top">
              <div className="separation-top">
                <h1 className="fz1-5 p2"> Tambien te brindamos utilidades adicionales en nuestro panel web </h1>
              </div>
              <img className="separation-top" src="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/img/scr-img/vertical-content.png" alt="image-panel"></img>
              
            </div>
          </div>
        </div>
          
        <div className="container">
          <div>
            <h1 className="fz1 separation-top primary-color">Rapido e intuitivo</h1>
            <h1 className="fz2">Verificacion en tiempo real</h1>
            <div className="displayFlex displayBlockResponsive separation-top">
              <div className="cards-setps-dashboard separation-top one">
              <span>1</span>
              <h1>Escanea el documento en la parte frontal con la camara de tu celular.</h1>    
              </div>
              <div className="cards-setps-dashboard separation-top twoo">
                <span>2</span>
                <h1>Escanea el documento en la parte trasera.</h1>    
              </div>
            </div>
            <div className="displayFlex displayBlockResponsive">
              <div className="cards-setps-dashboard separation-top three">
              <span>3</span>
              <h1>Ahora vamos con tu cara para verificar que eres tu!.</h1>    
              </div>
              <div className="cards-setps-dashboard separation-top four">
                <span>4</span>
                <h1>Accede tus votaciones habilitadas para comenzar a usar la aplicacion.</h1>    
              </div>
            </div>
          </div>

          <div>
            <h1 className="fz1 separation-top primary-color">¿Tienes alguna duda?</h1>
            <h1 className="fz2">Preguntas Frecuentes</h1>

            
            
          
            
          
          </div>
          

          <div className="separation-top"></div>
          <div className="separation-top"></div>            

        </div>
        <div className="circle-background"></div>          

        <div className="contact">
          
        </div>
        <FooterApp/>
      </div>
    );
  }
  
export default Dashboard;
  