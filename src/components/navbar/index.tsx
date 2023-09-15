import IonIcon from '@reacticons/ionicons';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logomodern3.png';
import './index.css';
import LogoEspana from '../../assets/spain_flag_icon_228692.png'
import LogoReinoUnido from '../../assets/reino-unido.png'
import {useTranslation} from 'react-i18next'


const Navbar = () => {
  const navigate = useNavigate();
  
  const [t,i18n] = useTranslation("global")
  
  
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <Link to={'/'} > <img width="160px" height="80px" src={Logo} alt="quorumlogo"/></Link>
          
        </div>
        <div className='navbar-items'>
            <button className="navbar-item" onClick={() => navigate('/login', {replace: true})} >
             Hud <IonIcon name="open-outline" />
            </button>
            <h1></h1>
            <div className='navbar-list'>
              
               
               <button className='buton-idioma' value="" onClick={() => i18n.changeLanguage('en')} >English
                <img src={LogoReinoUnido} alt="" />
               </button>
                <button className='buton-idioma' value="" onClick={() => i18n.changeLanguage('es')}>España
                  <img src={LogoEspana} alt="" />
                </button>
                
              
                
              
        </div>   
        </div>


      </div>
        
    );
  }
  
export default Navbar;
  