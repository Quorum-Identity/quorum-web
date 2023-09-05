import React from 'react'
import IonIcon from "@reacticons/ionicons";
const UserNavbar = () => {
  return (
    <div className='container-cont'>
        <section className='hijo-container'>
        <IonIcon name="notifications-outline" className='iconss noti-orange'></IonIcon>
            <div className='cicle'>
                <img src="https://images.unsplash.com/photo-1692035053253-c40149437b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
            </div>
          <p>Ferra Alexandra</p>    
        <IonIcon name="chevron-down-outline" className='iconss'></IonIcon>
          
        </section>
    </div>
  )
}

export default UserNavbar