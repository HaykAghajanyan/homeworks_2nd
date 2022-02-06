import {
  // BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Select from "./components/select";
import Messages from "./components/messages";

import './App.css';
import { useCallback, useState } from "react";
import Header from "./components/header";
// import { useDispatch, useSelector } from "react-redux";
// import { configSelector } from "./helpers/constSelector";


const App = () => {
  
  const [configs, setConfigs] = useState({})

  const handleConfigs = useCallback((obj)=>{
    setConfigs(obj)
  }, [])

  // const {} = useSelector(configSelector)

  // const dispatch = useDispatch()

 
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element = {<Messages configs={configs} />} />
        <Route path="/change-colors" element = {<Select handleConfigs={handleConfigs} />} /> 
      </Routes>
    </>
  )
}

export default App;