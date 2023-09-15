import {  useEffect, useState } from "react"

import NavbarHub from "../components/navbar"
import './styles.css'





const ConfigurationsUser = () => {
    
  
    const [data,setData] = useState([""])
  
    useEffect (() => { 
      
      fechtData()
      
    },[])
    
    
    const fechtData =  async() => { 
      const resp = await fetch(`https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre`)
      const dat = await resp.json()

       setData(dat.provincias)

      //  console.log(dat.parametros);
       
    
      }   
    // console.log(data);

   const handleChance = (e:any) => { 
    // console.log(e.target.value);
    
   }
 

   const handleClick = (e:any) => { 
    
      console.log(e.target.value);
      

   }

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
                                <form   >
                                <section>
                                                        
                                      <p>Provincias</p>
                                             <select  onClick={handleClick} name="provincias">
            
                                             {
                                                  data.map ((el:any,id) => {
                                                    return <option  onChange={(e:any)=> setData(e.target.value) } value={el.nombre} key={id} >{`${el.nombre}`}</option>
                                                  } )
                                              }
                    
                                             </select>
                                                                                      
                                 </section>
                              
                                 <section>
                                                                                      
                                <p >Municipios</p>

                                <select name="Municipios" id="">
                                      {
                                          data.map ((el:any,id) => {
                                            return <option disabled value={data} onChange={()=>handleChance} key={id}>{`${el.nombre}`}</option>
                                          } )
                                      }
                    
                             </select>
                              
                                 </section>
                              
                              
                                 
                                                                          
                                                             
                                </form>
                        
                     </div> 
        
                    

                        </section>



                         
                    </div>
           
            </div>   
              
    </>
  )
}

export default ConfigurationsUser