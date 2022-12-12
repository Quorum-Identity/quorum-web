import Navbar from '../../components/navbar';
import './create.votation.css';
const CreateVotation = () => {
    return (
      <div>
        <Navbar/>
        <div className='container votation'>
          <h1>1. Select the type of users you want to vote</h1>
            <div className="create-votation">
                
                <div className="votation-select first">
                  <h1>Registered</h1>
                  <p>That the user has an account in QUO</p>
                </div>
                <div className="votation-select">
                  <h1>Anonymus</h1>
                  <p>No requirement</p>
                </div>
                <div className="votation-select last">
                  <h1>Identified</h1>
                  <p>That you have scanned your identity document</p>
                </div>
                
            </div>
            <button className="next-button">Next</button>
        </div>
        
        
      </div>
    );
  }
  
export default CreateVotation;
  