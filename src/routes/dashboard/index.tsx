import Navbar from "../../components/navbar";
import './index.css';
import * as Icon from 'react-feather';
import CardVotation from "../../components/card_votation";
import IonIcon from "@reacticons/ionicons";
import FooterApp from "../../components/footer/footer";
import { Link } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import { Fade, JackInTheBox, Bounce} from "react-awesome-reveal";

const Dashboard = () => {
  
  const [t,i18n] = useTranslation('global')

    return (
      <div className="" >
        <Navbar t = {t} i18n={i18n}/>
            
          <div style={{position: 'relative'}} className="presentation displayFlex center displayBlockResponsive">
            <div className="w50 w100Responsive displayNoneResponsive">
              <img className="modified"  style={{
                transform: 'translate(-45%)',
                maxWidth: '100vw'
              }}  src="https://images.unsplash.com/photo-1503066375319-00fef06b159e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVycGxlJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80"/>
            
            </div>
            <div className="containerpurple left" style={{
              padding: '2rem',
              zIndex: '1'
            }}>
              <h1 style={{color: '#47a347', fontSize: '2rem'}}>Blockchainnn</h1>
              <Fade>
                <h1 style={{color: 'white', fontSize: '4rem'}}>{t("sub_navbar.parrafo")}</h1>
              </Fade>
              <button className="btn btn-primary">{t("button_p.title")}</button>
              <button className="btn btn-primary-full">{t("button_p2.title")}</button>


            </div>
            <img className="displayNoneResponsive" width='100%' max-width='100%' height='100%' style={{zIndex: '0',position: "absolute", margin: '0rem'}} src="https://cdn.discordapp.com/attachments/1128670410058252369/1128833332017369268/3.png"/>
            
          </div>
          <div >

            <img width='100%' src="https://cdn.discordapp.com/attachments/1128670410058252369/1128822422674624633/Politicos.png"/>
          </div>
          <div className="container ">
              <h1 className="m1 mt2" style={{color: 'black'}}>{t("parrafo-argentina.h1VoteArgentina")}</h1>
              <p className="m1" style={{color: 'black'}}>{t("parrafoSobrelosvotos.p1")}</p>
          </div> 
          <div style={{paddingTop: '3rem', paddingBottom: '3rem'}} className="presentation mt2 displayFlex displayBlockResponsive">
            <div className="container w50 w100Responsive ">
              <h1 className="m1" style={{color: 'white'}}>{t("titulosection.h1")}</h1>
              <p className="m1 mt1" style={{color: 'white'}}>{t("121231.p1")}</p>
              <button className="btn btn-primary-full"><IonIcon name="logo-google-playstore"/>{t("213981.p1")}</button>
              <button className="btn btn-primary"><IonIcon name="logo-apple"/>{t("27651.p1")}</button>
            </div>
            <JackInTheBox className="animate__backInRight">
              <video  playsInline autoPlay muted loop><source src="https://static-content.regulaforensics.com/FACE%20SDK%2013%20Feb.mp4"/> Your browser does not support the video tag. </video>
            </JackInTheBox>
          </div>
          
          <div className="container mt2">
              
              <h1 className="m1 mt2" style={{color: 'black'}}>{t("12312312.p1")}</h1>
              <p className="m1" style={{color: 'black'}}>{t("213125.p1")}</p>
          </div>
          <div className="presentation" style={{paddingTop: '3rem'}}>
            <div className="container">
              <h1 className="fzResponsive" style={{color: 'white'}}>{t("46742.p1")}</h1>
              <div className="displayFlex between displayBlockResponsive">
                <Bounce >
                <div className="technologie">
                  <IonIcon name="document-outline"/>
                  <h2 >{t("2135.p1")}</h2>
                  <p>{t("451234.p1")}</p>
                </div>
                </Bounce>
                <Bounce>
                <div className="technologie">
                  <IonIcon name="person-circle-outline"/>
                  <h2 >{t("57421.p1")}</h2>
                  <p>{t("576381.p1")}</p>
                </div>
                </Bounce>
                <Bounce>
                <div className="technologie">
                  <IonIcon name="search-outline"/>
                  <h2 >{t("2451.p1")}</h2>
                  <p>{t("12563.p1")}</p>
                </div>
                </Bounce>
              </div>
              <div className="displayFlex between displayBlockResponsive">
                <Bounce>
                <div className="technologie">
                  <IonIcon name="construct-outline"/>
                  <h2 >{t("9053.p1")}</h2>
                  <p>{t("1235.p1")}</p>
                </div>
                </Bounce>
                <Bounce>
                <div className="technologie">
                  <IonIcon name="hardware-chip-outline"/>
                  <h2 >{t("53143.p1")}</h2>
                  <p>{t("12355.p1")}</p>
                </div>
                </Bounce>
                <Bounce>
                <div className="technologie">
                  <IonIcon name="id-card"/>
                  <h2 >{t("11111.p1")}</h2>
                  <p>{t("7654.p1")}</p>
                </div>
                </Bounce>
              </div>
            </div>
          </div>
          <div style={{margin: '0px', backgroundColor: '#eeeeee', paddingTop: '3rem', paddingBottom: '5rem'}}>
            <div style={{margin: '1rem'}}>
              <div className="login w100 displayFlex displayBlockResponsive" style={{flexDirection: "row"}}>
                <div style={{height: "auto"}} className="gradientBox w50 center w100Responsive">
                      
                      
                      <div style={{padding: '1rem'}} className="w100 mt2">
                        <h1 style={{color: '#47a347', fontSize: '2rem'}}>{t("23131.p1")}</h1>
                        

                        <button className="btn btn-white">{t("22222.p1")}</button>
                      </div>

                  </div>
                  <div  className="w50 " style={{marginRight: '2rem' ,overflow: "hideen", padding: '2rem'}}>

                      <h3 className="m1" style={{fontWeight: '300' ,fontSize: '3rem'}}> {t("6432.p1")}</h3>
                      <input placeholder='email' type="email" className="input m1" />
                      <div className="right">
                          <button style={{marginRight: '0rem'}} className="btn btn-primary">{t("5674.p1")}</button>
                      </div>
                  </div>
                  
              </div>
            </div>
          </div> 

          
        <FooterApp t= {t} i18n={i18n}/>
      </div>
    );
  }
  
export default Dashboard;
  