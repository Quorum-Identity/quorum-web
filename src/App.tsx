import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./routes/dashboard";
import CreateVotation from "./routes/votation";
import PrivacyPolicy from "./routes/resources/privacy";
import FrequentQuestions from "./routes/resources/fq";
import LoginView from "./routes/hub/access/login";
import ForgotView from "./routes/hub/access/forgot";
function App() {
  return (

      <div className="App">
        <Router>
          
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/login" element={<LoginView/>}></Route>
              <Route path="/forgot" element={<ForgotView/>}/>

              <Route path="/privacy-rules" element={<PrivacyPolicy/>}></Route>
              <Route path="/fq" element={<FrequentQuestions/>}></Route>
              <Route path="/create" element={<CreateVotation/>}/>

            </Routes>
        </Router>
      </div>
  );
}

export default App;
