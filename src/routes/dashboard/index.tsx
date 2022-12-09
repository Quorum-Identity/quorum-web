import Navbar from "../../components/navbar";
import './index.css';
import IonIcon from '@reacticons/ionicons';
const Dashboard = () => {
    return (
      <div>
        <Navbar/>
        <div className="container dashboard">
          <div className="dashboard-section-one">
            <h1>Professional or unpopular votes on BLOCKCHAIN.</h1>
              
            <p>
                Our system is based on a blockchain network, which means that you can create your votes totally FREE, managing the type of users you want to vote; be anonymous, registered or verified. Yes, also if necessary we verify the identity of the person with document scanning and face scan!.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
export default Dashboard;
  