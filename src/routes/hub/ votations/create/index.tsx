import { FunctionComponent, useState } from 'react';
import Navbar from '../../../../components/navbar';
import  { SwitchComponents } from '../../../../utils/general';
import ConfigureVotationDates from './configure.dates';
import SelectTypeVotation from './select.type';
import './create.votation.css';
import AddVotationOptions from './add.options';
import Footer from '../../../../components/footer/footer';
import NavbarHub from '../../components/navbar';
import ConfirmCreate from './confirm';



type OptionVotation  = { 
  title: string,
  element: JSX.Element,
  name: string
}
const listelements: Array<OptionVotation> = [
  {
    title: "1/4. Identifica a los usuarios usando inteligencia artificial para la verificacion KYC (Know Your Customer), utilizada por bancos de todo el mundo.",
    element: <SelectTypeVotation name="select-votation" />,
    name: "select-votation"
  },
  {
    title: "2/4. Configura algunos datos",
    element: <ConfigureVotationDates name="configurate-votation" />,
    name: "configurate-votation"
  },
  {
    title: "3/4. Añade a los participantes (vas a poder editarlos despues) ",
    element: <AddVotationOptions name="add-votation-options" />,
    name: "add-votation-options"
  },
  {
    title: "4/4. Un adminsitrador va a revisar tu votación, puedes hacer cualquier cambio en nuestro Hub.",
    element: <ConfirmCreate name="confirm-create"/>,
    name: "confirm-create"
  }
]
const CreateVotation = () => {
  const [oldComponent, setOldComponent] = useState<number>(-1)
  const [activeComponent, setActiveComponent] = useState<number>(0)
  return (
      <div className="displayFlex">
        <NavbarHub />
       
        <div className='hub-container votation' style={{padding: '2rem'}}>
          <h1>{listelements[activeComponent].title}</h1>
            <div className="create-votation" >
                
            <SwitchComponents active={listelements[activeComponent].name}>
              {listelements.map((e) => e.element)}
            </SwitchComponents>
                
            </div>
            <div className="buttons-nav-sticky">
              {
                oldComponent !== -1 ? <button className="back-button" onClick={() => {
                  setOldComponent(oldComponent-1)
                  setActiveComponent(oldComponent);
                  
                  if(oldComponent === 0) setOldComponent(-1);
                  
                }}>Atras</button> : ''
              }
              <button className="next-button" onClick={() => {
                if(activeComponent < listelements.length-1){
                  setOldComponent(activeComponent);
                  setActiveComponent(activeComponent+1);
                }
              }}>{activeComponent === 3 ? 'Confirmar y Crear' : 'Siguiente'}</button>
            </div>
        </div>
        </div>
  );
}
  
export default CreateVotation;