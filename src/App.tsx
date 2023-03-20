import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AppContent from "./routes/app/app";
import NavbarPanel from "./routes/app/navbar";
import Dashboard from "./routes/dashboard";
import CreateVotation from "./routes/votation";

function App() {
  return (

      <div className="App">
        <Router>
          
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/app" element={<AppContent/>}/>
              <Route path="/create" element={<CreateVotation/>}/>
            </Routes>
        </Router>
      </div>
  );
}

export default App;
