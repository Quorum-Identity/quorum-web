import IonIcon from '@reacticons/ionicons';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './index.css';
const Navbar = () => {
  const navigate = useNavigate();
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <Link to={'/'} > <img width="90px" height="90px" src={Logo} alt="quorumlogo"/></Link>
          
        </div>
        <div className='navbar-items'>
            <button className="navbar-item">
              <a style={{color: 'black'}} href='https://faceapi.regulaforensics.com/'>Try Online <IonIcon name="open-outline" /> </a>

            </button>
        </div>
        
        
      </div>
    );
  }
  
export default Navbar;
  