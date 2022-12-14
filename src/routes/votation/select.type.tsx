import { FunctionComponent, useState } from "react";
import { SwitchComponentChildrenType } from "../../utils/general";

const SelectTypeVotation: FunctionComponent<SwitchComponentChildrenType> = () => {
    const [activeComponent, setActiveComponent] = useState<number>(-1)
  
    return (
      <div className="select-type-votation">  
        <div className={activeComponent === 0 ? "votation-select select first" : "votation-select first" } onClick={() => setActiveComponent(0)}>
          <h1>Registered</h1>
          <p>That the user has an account in QUO</p>
        </div>
        <div className={activeComponent === 1 ? "votation-select select" : "votation-select" } onClick={() => setActiveComponent(1)}>
          <h1>Anonymus</h1>
          <p>No requirement</p>
        </div>
        <div className={activeComponent === 2 ? "votation-select select last" : "votation-select last" } onClick={() => setActiveComponent(2)}>
          <h1>Identified</h1>
          <p>That you have scanned your identity document</p>
        </div>
      </div>
    );
}
export default SelectTypeVotation;