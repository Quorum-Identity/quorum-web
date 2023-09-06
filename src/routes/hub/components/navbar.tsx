import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/logomodern4.png';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';
import { useAppSelector } from '../../../hooks/store/store';
import { getStore } from '../../../hooks/store/user.slice';

const NavbarHub = () => {  
   const {user} = useAppSelector(getStore);
   const [collapsed, setCollapsed] = useState<boolean>(); 
   return(
   <div style={{cursor: 'pointer', zIndex: 0}} onClick={() => {setCollapsed(!collapsed)}}>
      <Sidebar style={{height: '100%'}} collapsed={collapsed}>
      <Menu 
         rootStyles={{height: '100%'}}
         menuItemStyles={{
            button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            
               backgroundColor: 'transparent',
               color: '#211236',
            
            },
         }}
      >  
         <img width='100%' height='100%' src={Logo}/>
         <MenuItem style={{zIndex: 1}} component={<Link to="/votations" />}>  <IonIcon name="ellipsis-vertical-outline" style={{marginRight: '.5rem' ,color: 'black'}}/><span style={{color: 'black'}}>Votations</span></MenuItem>
         <MenuItem component={<Link to="/configuration"/>}> <IonIcon name="person-outline" style={{marginRight: '.5rem' ,color: 'black'}}/><span style={{color: 'black'}}>Configuration</span></MenuItem>
         <MenuItem component={<Link to="/e-commerce" />}><IonIcon name="log-out-outline" style={{marginRight: '.5rem' ,color: 'brown'}}/><span style={{color: 'brown'}}>Log Out</span></MenuItem>
         
      </Menu>
      </Sidebar>
   </div>);
}
export default NavbarHub;