import IonIcon from "@reacticons/ionicons";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { SwitchComponentChildrenType } from "../../utils/general";


const AddVotationOptions: FunctionComponent<SwitchComponentChildrenType> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
      
    return (
        <div className="add-options-votation"> 
            <div className="displayFlex m1 add">
                <input className="m1 widthFull" {...register('name', { required: true })} type="text" />
                <div className="add-icon m1">
                    <IonIcon name={"add"} />
                </div>
            </div>

            <div className="displayFlex optionSelected m1">
                <span className="widthFull m1">La tua option que a aggiornato</span>
                <div className="remove-icon m1">
                    <IonIcon name="trash-outline"/>
                </div>
            </div>
            <div className="displayFlex optionSelected m1">
                <span className="widthFull m1">La tua option que a aggiornato</span>
                <div className="remove-icon m1">
                    <IonIcon name="trash-outline"/>
                </div>
            </div>
            <div className="displayFlex optionSelected m1">
                <span className="widthFull m1">La tua option que a aggiornato</span>
                <div className="remove-icon m1">
                    <IonIcon name="trash-outline"/>
                </div>
            </div>
            <div className="displayFlex optionSelected m1">
                <span className="widthFull m1">La tua option que a aggiornato</span>
                <div className="remove-icon m1">
                    <IonIcon name="trash-outline"/>
                </div>
            </div>
            <div className="displayFlex optionSelected m1">
                <span className="widthFull m1">La tua option que a aggiornato</span>
                <div className="remove-icon m1">
                    <IonIcon name="trash-outline"/>
                </div>
            </div>
            <div className="displayFlex optionSelected m1">
                <span className="widthFull m1">La tua option que a aggiornato</span>
                <div className="remove-icon m1">
                    <IonIcon name="trash-outline"/>
                </div>
            </div>
            
        </div>
       
    );
}
export default AddVotationOptions;