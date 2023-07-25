import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './index.css';
const Navbar = () => {
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <Link to={'/'} > <img width="90px" height="90px" src={Logo} alt="quorumlogo"/></Link>
          
        </div>
        <div className='navbar-items'>
          <button className="navbar-item">Try Online <IonIcon name="open-outline" /> </button>

        </div>
        
        
      </div>
    );
  }
  
export default Navbar;
  