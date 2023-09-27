import IonIcon from "@reacticons/ionicons"
import { useNavigate } from "react-router-dom"

const ViewVotation = () => {
    const navigate = useNavigate();
    return <div className="container">
        <IonIcon onClick={() => navigate('/votations', {replace: true})} style={{cursor: 'pointer',margin: '0rem', fontSize: '2rem'}} name="chevron-back-outline"/>

    </div>
}
export default ViewVotation;