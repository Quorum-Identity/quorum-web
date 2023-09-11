import '../card-staff/styles.css'
import Navbar from '../navbar';
import JsonStaticForCards from './JsonStaticForCards.json'




const StaffCard = () => {
  
return (
    <>
             <div className="displayFlex">
                  
            <div className="container-cards">
        
                {
                  JsonStaticForCards.map(({name,ability,imagen,id}) => (
                    <section className="cards" key={id}>
                     
                    <img src={`${imagen}`} alt=""/>
      
                    <div className="info-card">
                        <h2 >{name}</h2>
                        <p >{ability}</p>
                    </div>
      
                    </section>
                  ))
                }
              
                
            </div>
        </div>
    
        </>
  )
}

export default StaffCard