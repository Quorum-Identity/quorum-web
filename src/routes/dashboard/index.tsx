import Navbar from "../../components/navbar";
import './index.css';
import * as Icon from 'react-feather';
import CardVotation from "../../components/card_votation";
import IonIcon from "@reacticons/ionicons";
import FooterApp from "../../components/footer/footer";





const Dashboard = () => {
  

    return (
      <div className="">
        <Navbar/>
          <div style={{position: 'relative'}} className="mt1 presentation displayFlex">
            <div className="w50">
              <img style={{
                transform: 'translate(-50%)',
              }} className="" src="https://static-content.regulaforensics.com/Software-products/Face%20SDK/FACE.jpg"/>
            
            </div>
            <div style={{
              padding: '2rem',
              zIndex: '1'
            }}>
              <h1 style={{color: '#47a347', fontSize: '2rem'}}>Blockchain</h1>
              <h1 style={{color: 'white', fontSize: '4rem'}}>Vote with your phone from anywhere in the world</h1>
              <button className="btn btn-primary">Frequent Questions</button>
              <button className="btn btn-primary-full">Start now</button>


            </div>
            <img width='100%' max-width='100%' height='100%' style={{zIndex: '0',position: "absolute", margin: '0rem'}} src="https://cdn.discordapp.com/attachments/1128670410058252369/1128833332017369268/3.png"/>
            
          </div>
          <div >

            <img width='100%' src="https://cdn.discordapp.com/attachments/1128670410058252369/1128822422674624633/Politicos.png"/>
          </div>
          <div className="container ">
              <h1 className="m1 mt2" style={{color: 'black'}}>There are more than 36 million voters only in Argentina</h1>
              <p className="m1" style={{color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div> 
          <div style={{paddingTop: '3rem', paddingBottom: '3rem'}} className="presentation mt2 displayFlex">
            <div className="container w50 ">
              <h1 className="m1" style={{color: 'white'}}>Vote with your phone from anywhere in the world</h1>
              <p className="m1 mt1" style={{color: 'white'}}>With an application that is responsible for the security and transparency of electoral processes. Adding a simple and intuitive user interface</p>
              <button className="btn btn-primary-full"><IonIcon name="logo-google-playstore"/> Get It on Google Play</button>
              <button className="btn btn-primary"><IonIcon name="logo-apple"/> Available on the App Store</button>
            </div>
              <video  playsInline autoPlay muted loop><source src="https://static-content.regulaforensics.com/FACE%20SDK%2013%20Feb.mp4"/> Your browser does not support the video tag. </video>
          </div>
          
           
          <div className="presentation" style={{paddingTop: '3rem'}}>
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
                  <IonIcon name="construct-outline"/>
                  <h2 >Hardware-Assisted Authentication</h2>
                  <p>Scan documents anywhere with pocket-sized verification tools</p>
                </div>
                <div className="technologie">
                  <IonIcon name="hardware-chip-outline"/>
                  <h2 >RFID reading</h2>
                  <p>Verify documents equipped with Radio Frequency Identification (RFID) chips.</p>
                </div>
                <div className="technologie">
                  <IonIcon name="id-card"/>
                  <h2 >Face matching</h2>
                  <p>Make sure that a document’s presenter and its owner are the same person.</p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="container mt2">
              
              <h1 className="m1 mt2" style={{color: 'black'}}>The KYC process is provided by Regula Forensics</h1>
              <p className="m1" style={{color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="container mt2">

          </div>
        <FooterApp/>
      </div>
    );
  }
  
export default Dashboard;
  