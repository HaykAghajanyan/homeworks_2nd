import React from "react";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                {/*{*/}
                {/*    routes.map(({path,element,key}) => <Route path={path} element={element} key={key} />)*/}
                {/*}*/}
                    {
                        routes.map(item => <Route {...item} />)
                    }
            </Routes>
        </div>
    );
}

export default App;
