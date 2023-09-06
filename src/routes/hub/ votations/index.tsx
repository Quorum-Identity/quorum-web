import { useNavigate } from "react-router-dom";
import NavbarHub from "../components/navbar"
import { getStore } from "../../../hooks/store/user.slice";
import { useAppSelector } from "../../../hooks/store/store";
import { useEffect } from "react";
import IonIcon from "@reacticons/ionicons";
import GetDemo from "../../resources/getdemo";
import UserNavbar from "../components/UserNavbar/panelnombreuser";



const VotationsHub = () => {
    const {user} = useAppSelector(getStore);
    const navigate = useNavigate();
    useEffect(() => {

        if(user._id === ""){
            //navigate('/login', {replace: true});
        }
    }, []);
    return (
    <div className="displayFlex">
        <NavbarHub/>
       
        <div className="hub-container w100" >
            <UserNavbar/>
           
            <div style={{flexBasis: '100%', padding: '2rem'}}>
                <div className="displayFlex between w100">
                    <h1 style={{fontSize: '3rem', marginTop: 'auto'}}>Your votations</h1>

                    <div >
                        <button onClick={() => navigate('/create')} className="btn btn-primary" style={{marginTop: '0rem'}}><IonIcon name="add-outline" /> Create</button>
                    </div>
                </div>
                <div className="displayFlex between w100">
                    <input  placeholder="Search"></input>
                    <input style={{marginLeft: '.5rem'}} type="date"  placeholder="Search"></input>

                    
                </div>
                <div className="table-white-background">
                    <h1 style={{fontSize: '1.5rem'}}> Eleccionas Primarias</h1>
                    
                    <IonIcon name="chevron-forward-outline" style={{fontSize: '1.5rem', color: 'grey', cursor: 'pointer' ,position: 'absolute', top: '2rem', right: '1rem'}}/>
                </div>
                <div className="table-white-background">
                    <h1 style={{fontSize: '1.5rem'}}> Paso 2023</h1>
                    <GetDemo/>
                    <IonIcon name="chevron-forward-outline" style={{fontSize: '1.5rem', color: 'grey', cursor: 'pointer' ,position: 'absolute', top: '2rem', right: '1rem'}}/>
                </div>
                <div className="table-white-background">
                    <h1 style={{fontSize: '1.5rem'}}> Paso 2023</h1>
                    <GetDemo/>
                    <IonIcon name="chevron-forward-outline" style={{fontSize: '1.5rem', color: 'grey', cursor: 'pointer' ,position: 'absolute', top: '2rem', right: '1rem'}}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default VotationsHub;