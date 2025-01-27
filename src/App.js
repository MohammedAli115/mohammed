
import Navbar from "./Components/Navbar";
import Data from "./Components/perData/Data";
import Toggle from "./Components/Toggle";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import ContentApp from "./Components/Content/ContentApp";
function App() {
  return (
    <div className="App bg-light">
      <Router>
        <Navbar />
        <Toggle />
        <div className="container py-3 pb-1">
          <div className="row">
          
            <div className="col-lg-3 col-md-4">
              <Data />
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 bg-white p-3">
              <ContentApp />
            </div>
          </div>
        </div>
      </Router>

    </div>
  );
}

export default App;
