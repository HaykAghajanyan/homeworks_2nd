import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import Select from "./components/select";
import Messages from "./components/messages";

import './App.css';
import { useCallback, useState } from "react";


const App = () => {
  const [configs, setConfigs] = useState({})

  const handleConfigs = useCallback((obj)=>{
    setConfigs(obj)
  }, [])


  return (
    <Router>
      <header>
        <nav className='navigation'>
          <Link to="/"> Messages </Link> <br/>  
          <Link to="/change-colors"> Select </Link> <br/>
        </nav>

        <Routes>
          <Route path="/" element = {<Messages configs={configs} />} />
          <Route path="/change-colors" element = {<Select handleConfigs={handleConfigs} />} /> 
        </Routes>

      </header>
    </Router>
  )
}

export default App;