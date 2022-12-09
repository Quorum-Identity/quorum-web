import Logo from '../../assets/logo';
import './index.css';
const Navbar = () => {
    return (
      <div className="navbar">
        <div className="navbar-brand">
            <h1> Q</h1>
        </div>
        <div className='navbar-items'>
        <button className="navbar-item">Contact</button>
            
            <button className="navbar-item background">NEW</button>
        </div>
        
        
      </div>
    );
  }
  
export default Navbar;
  