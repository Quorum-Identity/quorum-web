import { ChakraBaseProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./routes/dashboard";
import CreateVotation from "./routes/votation";

function App() {
  return (
    <ChakraBaseProvider>

      <div className="App">
        <Router>
          
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/create" element={<CreateVotation/>}/>
            </Routes>
        </Router>
      </div>
    </ChakraBaseProvider>
  );
}

export default App;
