import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./routes/dashboard";
import CreateVotation from "./routes/votation/create.votation";

function App() {
  return (
    <div className="App">
      <Router>
        
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/create" element={<CreateVotation/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
