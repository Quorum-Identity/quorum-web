import IonIcon from '@reacticons/ionicons';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logomodern3.png';
import './index.css';
import {useTranslation} from 'react-i18next'
import { useRef } from 'react';
import logoEspaña from '../../assets/espanaCopia.png'
import LogoEstadosUnidos from '../../assets/estados-unidos.png'
import LogoItalia from '../../assets/italia.png'


const Navbar = () => {
  const navigate = useNavigate();
  
  const [t,i18n] = useTranslation("global")



  // const button = useRef(null)
  // const handleChange = (e) => {
  //     console.log(e);
  //   if ( button.current.style.display === 'none') {
  //   return button.current.style.display = 'flex'
  // }else { 
  //   button.current.style.display = 'none'
  // }
 

  // }

  
 
  


    return (
      <div className="navbar">
        <div className="navbar-brand">
          <Link to={'/'} > <img width="160px" height="80px" src={Logo} alt="quorumlogo"/></Link>
          
        </div>
        <div className='navbar-items'>
            <button className="navbar-item" onClick={() => navigate('/login', {replace: true})} >
             Hud <IonIcon name="open-outline" />
            </button>
            
           <div className='container-navbar'  >
              <h3 >Language <IonIcon className='iconsss' name="chevron-up-outline"></IonIcon></h3>
            <div className='navbar-hijo'>
           
            <div className='navbar-list'   >
                  <ul>
                      <li onClick={() => i18n.changeLanguage('es')}  >España
                            <img src={logoEspaña} alt="españa" />
                      </li>
                      <li onClick={() => i18n.changeLanguage('en')} >English 
                        
                         <img src={LogoEstadosUnidos}  alt="english"  />

                      </li>

                      <li>Italia
                            <img src={LogoItalia} alt="" />
                      </li>
                  </ul>
               </div>
            </div>
           
             
            </div>
            
        </div>

      </div>
        
    );
  }
  
export default Navbar;
  