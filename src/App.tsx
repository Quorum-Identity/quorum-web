import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./routes/about";
import ManhattanSection from "./routes/games/manhattan";
import Home from './routes/home';
function App() {
  return (
    <div className="App">
      <Router>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/store/manhattan" element={<ManhattanSection/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
