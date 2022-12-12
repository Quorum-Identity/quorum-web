import Navbar from "../../components/navbar";
import './index.css';
import IonIcon from '@reacticons/ionicons';
const Dashboard = () => {
    return (
      <div>
        <Navbar/>
        <div className="container dashboard">
          <div className="dashboard-section-one">
            <div>
              <h1>Professional or unpopular</h1>
              <h1>votes on BlockChain.</h1>
              <p>
                  Our system is based on a blockchain network, which means that you can create your votes totally FREE, managing the type of users you want to vote; be anonymous, registered or verified. Yes, also if necessary we verify the identity of the person with document scanning and face scan!.
              </p>
            </div>
            <div className="justice-wallpaper">
              
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
export default Dashboard;
  