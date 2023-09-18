import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { SwitchComponentChildrenType } from "../../../../utils/general";
import { locations } from "../../../../models/votation.model";


const ConfigureVotationDates: FunctionComponent<SwitchComponentChildrenType> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [type, setType] = useState<number>(0);{}

  
    

    return (
            <form className="w100" onSubmit={handleSubmit((data) => console.log(data))}>

                <div>
                    <p className="">Image banner</p>
                    <input className=" w100" {...register('image', { required: true })} type="file" style={{width: '90%'}} />
                        
                </div>
                    
                <div className="displayFlex between" style={{width: '90%'}}>
                    <div className="w100">
                        <p className="">Image banner</p>
                        <input className="" {...register('name', { required: true })} type="text" />
                        
                    </div>
                    <div className="w100">
                        <p className="">Type</p>
                        <select onChange={(e: any) => setType(e.target!.value)}>
                            <option value={0} label="Municipal"></option>
                            <option value={1} label="Provincial"></option>
                            <option value={2} label="Nacional"></option>

                        </select>

                    </div>
                    <div className="w100">
                        <p className="">Location</p>
                        <select >
                            {locations.map((e:any) => {
                                return <option label={e.nombre} value={e.id}></option>
                            })}
                        </select>
                        
                    </div>
                   
                </div>
                
                <p className="">Date start</p>
                <input className="" {...register('name', { required: true })} type="datetime-local" style={{width: '90%'}}/>
                <p className="">Date end</p>
                <input className="" {...register('name', { required: true })} type="datetime-local" style={{width: '90%'}} />
                {errors.lastName && <p>Last name is required.</p>}
                {errors.age && <p>Please enter number for age.</p>}
                
            </form>
       
    );
}
export default ConfigureVotationDates;