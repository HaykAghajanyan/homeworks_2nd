import {useEffect, useState} from "react";
import Navigation from "./components/navigation";
import Messages from "./components/messages";
import Settings from "./components/settings";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import "./index.css";

const colors = {
    GREEN: "Green",
    RED: "Red",
    BLUE: "Blue",
    DEFAULT: "Light Blue"
};


function App() {

    const [color, setColor] = useState();
    const [data, setData] = useState();
    const [textClass, setTextClass] = useState();
    const [nameClass, setNameClass] = useState();


    const selectHandler = (color, attr) => {
        if (attr === "Name") {
            setNameClass(color);

        } else if (attr === "Text") {
            setTextClass(color);

        }
    };


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
                <Route path={"/"} element={<Messages data={data} textClass={textClass} nameClass={nameClass}/>}/>
                <Route path={"/settings"} element={<Settings colors={colors} selectHandler={selectHandler}/>}/>
            </Routes>

        </BrowserRouter>


    </div>;
}

export default App;
