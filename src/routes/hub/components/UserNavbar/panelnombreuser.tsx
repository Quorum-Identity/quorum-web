import IonIcon from "@reacticons/ionicons";
import './styles.css'

const UserNavbar = () => {
  return (
    <div className='container-cont displayFlex between'>
      <div>
        <IonIcon name="help-outline" className='notification noti-orange' title='Whath is Pricing?'></IonIcon>
      </div>
        <section className='hijo-container'>
          <p>Ferra Alexandra</p>    
            <div className='circule-image'>
                <img src="https://images.unsplash.com/photo-1692035053253-c40149437b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
            </div>
        </section>
    </div>
  )
}

export default UserNavbar