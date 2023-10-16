import { FunctionComponent, useState } from "react";
import { SwitchComponentChildrenType } from "../../../../utils/general";
import { Link } from "react-router-dom";

const SelectTypeVotation: FunctionComponent<SwitchComponentChildrenType> = () => {
    const [activeComponent, setActiveComponent] = useState<number>(-1)
  
    return (
      <div>
          
            <p>Te invitamos a leer nuestra seccion de precios, alli vas a encontrar nuestros diferentes planes para poder llevar acabo tus votaciones correctamente.</p>
          <Link style={{fontSize: '1.5rem', color:"rgb(77, 115, 131) !important"}} to="/pricing">Pricing</Link>
      
      </div>
    );
}
export default SelectTypeVotation;