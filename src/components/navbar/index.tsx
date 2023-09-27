import IonIcon from '@reacticons/ionicons';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logomodern3.png';
import './index.css';
import logoEspaña from '../../assets/espanaCopia.png'
import LogoEstadosUnidos from '../../assets/estados-unidos.png'
import LogoItalia from '../../assets/italia.png'



const Navbar = ({t , i18n}:any) => {
  const navigate = useNavigate();
  console.log({i18n});
  


    return (
      <div className="navbar">
        <div className="navbar-brand">
          <Link to={'/'} > <img width="160px" height="80px" src={Logo} alt="quorumlogo"/></Link>
          
        </div>
        <div className='navbar-items'>
            
            
           <div className='container-navbar'  >
              <h3 >{t("12312.p1")} <IonIcon className='iconsss' name="chevron-up-outline"></IonIcon></h3>
              <div className='navbar-hijo'>
           
            <div className='navbar-list'   >
                  <ul>
                      <li onClick={ () => i18n?.changeLanguage('es')}> Español
                            <img src={logoEspaña} alt="españa" />
                      </li>
                      <li onClick={ () => i18n?.changeLanguage('en')} >English 
                        
                         <img src={LogoEstadosUnidos}  alt="english"  />

                      </li>

                      <li onClick={ () => i18n?.changeLanguage('ita')}>Italian
                            <img src={LogoItalia}  alt="" />
                      </li>
                  </ul>
               </div>
            </div>
           
             
            </div>
            <button className="navbar-item" onClick={() => navigate('/login', {replace: true})} >
             Hub <IonIcon name="open-outline" />
            </button>
        </div>

      </div>
        
    );
  }
  
export default Navbar;
  