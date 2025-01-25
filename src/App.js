import Contact from "./Components/Content/Contact";
import Home from "./Components/Content/Home";
import Resume from "./Components/Content/Resume";
import Works from "./Components/Content/Works";
import Navbar from "./Components/Navbar";
import Data from "./Components/perData/Data";
import Toggle from "./Components/Toggle";
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


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
              <Routes>
                <Route path="/" element={<Home/> } />
                <Route path="/Resume" element={<Resume/> } />
                <Route path="/Works" element={<Works/> } />
                <Route path="/Contact" element={<Contact/> } />
              </Routes>  
            </div>

          </div>
        </div>
      </Router>

    </div>
  );
}

export default App;
