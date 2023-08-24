import { FunctionComponent, useState } from "react";
import { SwitchComponentChildrenType } from "../../../../utils/general";
import { Link } from "react-router-dom";

const SelectTypeVotation: FunctionComponent<SwitchComponentChildrenType> = () => {
    const [activeComponent, setActiveComponent] = useState<number>(-1)
  
    return (
      <div>
          
            <p>Because life identification and facial recognition cost money, quorum charges a small surcharge for each vote to foster its growth and security, a portion of which is earmarked for artificial intelligence, see the pricing page.</p>
          <Link style={{fontSize: '1.5rem', color:"rgb(77, 115, 131) !important"}} to="/pricing">Pricing</Link>
      
      </div>
    );
}
export default SelectTypeVotation;