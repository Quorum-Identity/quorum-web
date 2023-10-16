import { FunctionComponent, SetStateAction,  useRef,  useState } from "react";
import { set, useForm } from "react-hook-form";
import { SwitchComponentChildrenType } from "../../../../utils/general";
import { locations } from "../../../../models/votation.model";




const ConfigureVotationDates: FunctionComponent<SwitchComponentChildrenType> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    
    const selectOption = useRef(null)
    console.log(selectOption)
    
    const [province, SetProvince] = useState<number>(0);{}
   
    
   const result = locations.map( pickup => {
       const match = locations.find(addr => addr.id === pickup.id);
       return {
           
           ciudades: match?.ciudades,
           id : match?.id,
           name : match?.nombre
           
       }
       
   })
   

    const [municipios,setMunicipios] = useState('');
   const [type, setType] = useState(-1);
   const resultaditos = locations.find( ctr => {
     
       if (ctr.id >= province) {
           return ctr.ciudades
       }
   })
 
     return (
     <form className="w100" onSubmit={handleSubmit((data) => console.log(data))} ref={selectOption}>
                <h1 style={{fontSize: '1rem', color: 'tomato'}}>Importante: todos los datos se pueden editar posterior a crear la votacion pero no despues de que esta inicie.</h1>

                <div className="w100">
                    <p className="">Banner</p>
                    <input className=" w100" {...register('image', { required: true })} type="file" style={{width: '90%'}} />
                        
                </div>
                <div className="w100">
                        <p className="">Tipo</p>
                         

                         <select onChange={(e) => setType(Number(e.target.value) ?? -1) } >
                                <option value="-1">Seleccionar</option>
                                <option value="0">Nacional</option>
                                <option value="1">Provincial</option>
                                <option value="2">Municipal</option>

                         </select>

                         
                    </div>
                    
                <div className="displayFlex between" style={{width: '100%'}}>
                    
                    

                    
                    <div className="w100">
                        <p className="">Provincia</p>
                        <select className="w100" value={province}   onChange={(e:any) => SetProvince(e.target!.value)}    disabled={type < 1 ? true : false}>
                           
                            {locations.map((e:any,index) => {
                           return <option  label={e.nombre} value={e.id} key={index}></option>})}
                        </select>
                        
                    </div>
                    <div className="w100" >
                        <p className="">Municipios</p>
                         
                            
                         <select value={municipios} style={{cursor: 'pointer'}} className="options" onChange={(e) => setMunicipios(e.target.value)} disabled={type !== 2 ? true : false}>
                              
                             {
                                resultaditos?.ciudades.map((ciudad) => (
                                    <option  ref={selectOption}  value={ciudad.id}>{ciudad.nombre}</option>
                                ))
                             }
                         </select>
                  
                    </div>


                    
                   
                </div>
                
                <p className="">Inicio</p>
                <input className="" {...register('name', { required: true })} type="datetime-local" style={{width: '90%'}}/>
                <p className="">Fin</p>
                <input className="" {...register('name', { required: true })} type="datetime-local" style={{width: '90%'}} />
                {errors.lastName && <p>Last name is required.</p>}
                {errors.age && <p>Please enter number for age.</p>}
                
            </form>
       
    );
}
export default ConfigureVotationDates;