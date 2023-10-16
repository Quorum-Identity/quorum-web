import { useNavigate } from "react-router-dom";
import NavbarHub from "../components/navbar"
import { getStore } from "../../../hooks/store/user.slice";
import { useAppSelector } from "../../../hooks/store/store";
import { useEffect } from "react";
import IonIcon from "@reacticons/ionicons";
import ChartVotations from "../charts/initial";
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
                    <p style={{margin: '0rem', color: 'grey', fontSize: '1rem'}}>Moron, Buenos Aires, Argentina{'  (18/9/2019, 8:30 - 18/9/2019, 18:30)'}</p>
                    <h1 style={{fontSize: '1.5rem', marginTop: '.1rem'}}> Eleccionas Primarias</h1>
                    <IonIcon name="create-outline" style={{fontSize: '1.5rem', color: '#F76301', cursor: 'pointer' ,position: 'absolute', top: '1rem', right: '3rem'}}/>
                    <IonIcon name="chevron-forward-outline" style={{fontSize: '1.5rem', color: 'grey', cursor: 'pointer' ,position: 'absolute', top: '1rem', right: '1rem'}}/>
                </div>
                <div className="table-white-background">
                    <p style={{margin: '0rem', color: 'grey', fontSize: '1rem'}}>Argentina{'  (18/9/2019, 8:30 - 18/9/2019, 18:30)'}</p>
                    <h1 style={{fontSize: '1.5rem', marginTop: '.1rem'}}> Paso 2023</h1>
                    <IonIcon name="create-outline" style={{fontSize: '1.5rem', color: '#F76301', cursor: 'pointer' ,position: 'absolute', top: '1rem', right: '3rem'}}/>
                    <IonIcon name="chevron-forward-outline" style={{fontSize: '1.5rem', color: 'grey', cursor: 'pointer' ,position: 'absolute', top: '1rem', right: '1rem'}}/>
                </div>
                <div className="table-white-background">
                    <p style={{margin: '0rem', color: 'grey', fontSize: '1rem'}}>Argentina{'  (18/9/2019, 8:30 - 18/9/2019, 18:30)'}</p>
                    <h1 style={{fontSize: '1.5rem', marginTop: '.1rem'}}> Paso 2023</h1>
                    <IonIcon name="create-outline" style={{fontSize: '1.5rem', color: '#F76301', cursor: 'pointer' ,position: 'absolute', top: '1rem', right: '3rem'}}/>
                    <IonIcon name="chevron-forward-outline" style={{fontSize: '1.5rem', color: 'grey', cursor: 'pointer' ,position: 'absolute', top: '1rem', right: '1rem'}}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default VotationsHub;