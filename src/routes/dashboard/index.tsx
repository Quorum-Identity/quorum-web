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
    
          <div className="presentation mt1 displayFlex">
            <div className="container ">
              <h1 className="m1" style={{color: 'white'}}>Vote with your phone from anywhere in the world</h1>
              <p className="m1 mt1" style={{color: 'white'}}>With an application that is responsible for the security and transparency of electoral processes. Adding a simple and intuitive user interface</p>
              <button className="btn btn-primary-full"><IonIcon name="logo-google-playstore"/> Get It on Google Play</button>
              <button className="btn btn-primary"><IonIcon name="logo-apple"/> Available on the App Store</button>
            </div>
              <video playsInline autoPlay muted loop><source src="https://static-content.regulaforensics.com/FACE%20SDK%2013%20Feb.mp4"/> Your browser does not support the video tag. </video>
          </div>
          <div className="displayFlex between imagesinvert">
            <img width='26%' src="https://upload.wikimedia.org/wikipedia/commons/0/04/Milei_spot_2021.png"/>
            <img width='24%' src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Mauricio_Macri_2016.jpg"/>
            <img width='25%' src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"/>
            <img width='25%' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Presidente_Bukele_%28cropped%29.jpg/1200px-Presidente_Bukele_%28cropped%29.jpg"/>
          </div>
          <div className="container ">
              <h1 className="m1 mt2" style={{color: 'black'}}>There are more than 36 million voters only in Argentina</h1>
              <p className="m1" style={{color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>  
          <div className="presentation mt2">
            <div className="container">
              <h1 style={{color: 'white'}}> Technologies we use</h1>
              <div className="displayFlex between">
                <div className="technologie">
                  <IonIcon name="document-outline"/>
                  <h2 >Document type identification</h2>
                  <p>Verify data from 12,000+ international documents using AI and ML.</p>
                </div>
                <div className="technologie">
                  <IonIcon name="person-circle-outline"/>
                  <h2 >Livennes Detection</h2>
                  <p>Examine the liveness of a person with AI and machine learning algorithms.</p>
                </div>
                <div className="technologie">
                  <IonIcon name="search-outline"/>
                  <h2 >Optical Character Recognition (OCR)</h2>
                  <p>Convert typed or printed text into digital data.</p>
                </div>
              </div>
              <div className="displayFlex between">
                <div className="technologie">
                  <IonIcon name="document-outline"/>
                  <h2 >Document type identification</h2>
                  <p>Verify data from 12,000+ international documents using AI and ML.</p>
                </div>
                <div className="technologie">
                  <IonIcon name="person-circle-outline"/>
                  <h2 >Livennes Detection</h2>
                  <p>Examine the liveness of a person with AI and machine learning algorithms</p>
                </div>
                <div className="technologie">
                  <IonIcon name="search-outline"/>
                  <h2 >Optical Character Recognition (OCR)</h2>
                  <p>Convert typed or printed text into digital data.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt2">
              
              <h1 className="m1 mt2" style={{color: 'black'}}>The KYC process is provided by Regula</h1>
              <p className="m1" style={{color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        <FooterApp/>
      </div>
    );
  }
  
export default Dashboard;
  