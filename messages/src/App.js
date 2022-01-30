import React, {useCallback, useState} from 'react';
import Header from "./components/Header";
// import Testomponent from './components/Testomponent';
// import Settings from './components/Settings';
import {Routes,
  Route,
  Link,
  Router} from 'react-router-dom'
import './index.css'
import Messages from "./components/Messages";
import Configs from "./components/Configs";


function App() {
    const [configs, setConfigs] = useState({})


    const handleConfigs = useCallback((configsObj) =>{
        setConfigs(configsObj)
    }, [])

    return(
        <>
            <Header />
            <Routes>
                <Route path='' element={<Messages configs={configs} />} />
                <Route path='configs' element={<Configs handleConfigs={handleConfigs} />} />
            </Routes>
        </>
    )
}

export default App;
