import UserNavbar from "../components/UserNavbar/panelnombreuser"
import NavbarHub from "../components/navbar"
import './styles.css'


const ConfigurationsUser = () => {
  return (
    <div className="displayFlex">
        <NavbarHub/>
      
               <div className="displayFlex" style={{width: '100%'}}>

               <div className="layout-container">
                    
                    <section className="formulario">

                    <div className="formulario-date">
                       
                            <label htmlFor="">Codígo Postal</label>
                            <input type="number" name="" id="" />

                            <label htmlFor="">Numéro de Documento</label>
                            <input type="number" name="" id="" />



                    </div>      

                            <div className="formulario-perfil">
                                <div className="giro-image">
                                    <img src="https://plus.unsplash.com/premium_photo-1692441594005-de92a73cc0ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
                                </div>

                                <div>
                                    <label htmlFor="">Name</label>
                                <input type="text" name="" id="" />

                                <label htmlFor="">Apellido</label>
                                <input type="text" name="" id="" />


                                <label htmlFor="">Telefono</label>
                                <input type="tel" name="" id="" />

                                </div>
                            </div>
                    

                    </section>


                     <div className="formulario-location">

                                                            
                                <section>
                                        
                                <p>Provincia</p>
                                <select name="" id="">
                                    <option value="">Mendoza</option>
                                    <option value="">San Luis</option>
                                    <option value="">San Juan</option>
                                </select>
                                        
                                </section>

                                <section>
                                    
                                <p >Ciudad</p>
                                <select name="" id="">
                                    <option value="">San Rafael</option>
                                    <option value="">Mendoza</option>
                                </select> 

                                </section>


                                <section>

                                <p>Pais</p>
                                <select name="" id="">
                                    <option value="">Argentina</option>
                                    <option value="">Brazil</option>
                                    <option value="">Colombia</option>
                                </select>

                                </section>
                                    
                                <div>
                                </div>
                                </div> 


                         
               </div>
           
               </div>
                
              
    </div>
  )
}

export default ConfigurationsUser