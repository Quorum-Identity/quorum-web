import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./routes/dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        
          <Routes>
            <Route path="/" element={<Dashboard/>}/>

          </Routes>
      </Router>
    </div>
  );
}

export default App;
