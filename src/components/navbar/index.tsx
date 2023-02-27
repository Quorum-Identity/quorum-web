import { Link } from 'react-router-dom';
import Logo from '../../assets/logo3.png';
import './index.css';
const Navbar = () => {
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <Link to={'/'} > <img width="90px" height="50px" src={Logo} alt="quorumlogo"/></Link>
            
        </div>
        <div className='navbar-items'>
        <button className="navbar-item">Contact</button>
            
            <button className="navbar-item background"><Link to={'/create'} >About Us</Link></button>
        </div>
        
        
      </div>
    );
  }
  
export default Navbar;
  