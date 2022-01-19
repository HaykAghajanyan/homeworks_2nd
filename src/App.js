import {useEffect, useState} from "react";
import Navigation from "./components/navigation";
import Messages from "./components/messages";
import Settings from "./components/settings"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import "./index.css";

function App() {
    const [data, setData] = useState();
    useEffect(() => {
        fetch("../data/data.json")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res);
            });


    }, []);


    return <div>


        <BrowserRouter>

        <Navigation/>
            <Routes>
                <Route path={"/"} element={ <Messages data={data}/>}/>
                <Route path={"/settings"} element={ <Settings/>}/>
            </Routes>

        </BrowserRouter>


    </div>;
}

export default App;
