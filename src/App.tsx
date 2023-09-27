import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";
import Dashboard from "./routes/dashboard";
import CreateVotation from "./routes/hub/ votations/create";
import PrivacyPolicy from "./routes/resources/privacy";
import FrequentQuestions from "./routes/resources/fq";
import LoginView from "./routes/hub/access/login";
import ForgotView from "./routes/hub/access/forgot";
import { useState, useEffect } from "react";
import { useAppDispatch } from "./hooks/store/store";

import { GetUserData } from "./hooks/api/api.user";
import HomeHub from "./routes/hub/home";
import VotationsHub from "./routes/hub/ votations";
import PricingHub from "./routes/pricing";
import ConfigurationsUser from "./routes/hub/Configuration/userconfig";
import StaffCard from "./components/card-staff/StaticCard";



import Staff from "./routes/staff";
import ViewVotation from "./routes/hub/ votations/view";

const App = () =>  {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      await GetUserData(dispatch);
      setLoading(true);      
    })();
  }, []);
  return (
        <>
          {isLoading ? <Router>
            
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/login" element={<LoginView/>}></Route>
              <Route path="/forgot" element={<ForgotView/>}/>

              <Route path="/privacy-rules" element={<PrivacyPolicy/>}></Route>
              <Route path="/fq" element={<FrequentQuestions/>}></Route>
              <Route path="/create" element={<CreateVotation/>}/>
              
              
              //HUB
              <Route path="/hub" element={<HomeHub/>}/>
              <Route path="/votations" element={<VotationsHub/>}/>
              <Route path="/votations-view" element={<ViewVotation/>}/>

              //Cards

              <Route path="/pricing" element={<PricingHub/>}/>

              //Configuration//

              <Route  path="/configuration" element= {<ConfigurationsUser/>}/>
              
              <Route path="/staff" element={<Staff/>}/>
            </Routes>
        </Router>
        : <></>}
        </>
          
  );
}

export default App;
