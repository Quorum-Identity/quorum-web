import UserNavbar from "../components/UserNavbar/panelnombreuser"
import NavbarHub from "../components/navbar"
import './styles.css'


const ConfigurationsUser = () => {
  return (
    <>
          <div className= "displayFlex">
              <NavbarHub/>

      <div className="layout-container">
                    
                    <section className="formulario-content">

                    <div className="formulario-date">
                       
                            <form action="">
                            <label htmlFor="">Postal Code</label>
                            <input type="number" name="" id="" />

                            <label htmlFor="">Document number</label>
                            <input type="number" name="" id="" />
                            </form>


                    </div>      

                    <div className="formulario-perfil">
                                <div className="giro-image">
                                    <img src="https://plus.unsplash.com/premium_photo-1692441594005-de92a73cc0ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
                                </div>

                                <div>

                                     <form action=""> 

                                        <label htmlFor="">Name</label>
                                        <input type="text" name="" id="" />

                                        <label htmlFor="">Last name</label>
                                        <input type="text" name="" id="" />


                                        <label htmlFor="">Phone</label>
                                        <input type="tel" name="" id="" />

                                        </form>

                                </div>
        
                               

                     </div>

                     <div className="formulario-location">                                                   
                        <section>
                                                        
                          <p>Department</p>
                             <select name="" id="">
                                                    <option value="">Mendoza</option>
                                                    <option value="">San Luis</option>
                                                    <option value="">San Juan</option>
                                                </select>
                                                        
                                                </section>

                                                    <section>
                                                        
                                                    <p >City</p>
                                                    <select name="" id="">
                                                        <option value="">San Rafael</option>
                                                        <option value="">Mendoza</option>
                                                    </select> 

                                                    </section>


                                                    <section>

                                                    <p>Country</p>
                                                    <select name="" id="">
                                                        <option value="">Argentina</option>
                                                        <option value="">Brazil</option>
                                                        <option value="">Colombia</option>
                             </select>

                         </section>
                                            
                               
                     </div> 
        
                    

                        </section>


                    

                         
                    </div>
           
            </div>   
              
    </>
  )
}

export default ConfigurationsUser