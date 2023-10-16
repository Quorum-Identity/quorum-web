import IonIcon from "@reacticons/ionicons";
import { SwitchComponentChildrenType } from "../../../../utils/general";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const ConfirmCreate: FunctionComponent<SwitchComponentChildrenType> = () => {
    return (
        <div className="align-center" style={{textAlign: 'center'}}>
                <p style={{color:'grey'}}>Al confirmar, aceptas las siguientes secciones.</p>
                <div className="w100" style={{textAlign: 'left'}}>
                    <Link style={{fontSize: '1.5rem', color:"rgb(77, 115, 131) !important"}} to="/pricing">Politica de Privacidad</Link>

                </div>
                <div className="w100" style={{textAlign: 'left'}}>
                    <Link style={{fontSize: '1.5rem', color:"rgb(77, 115, 131) !important"}} to="/pricing">Terminos y Condiciones</Link>

                </div>
        </div>
    );
}

export default ConfirmCreate;