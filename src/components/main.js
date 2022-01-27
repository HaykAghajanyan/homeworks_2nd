import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./navigation";
import Messages from "./messages";
import Settings from "./settings";
import {useCallback, useEffect, useState} from "react";


export default function Main({loggedInUser, loggedInHandler}) {

    const [data, setData] = useState({messages: []});
    const [textClass, setTextClass] = useState("");
    const [nameClass, setNameClass] = useState("");





    const selectHandler = useCallback((color, attr) => {
        if (attr === "Name") {
            setNameClass(color);

        } else if (attr === "Text") {
            setTextClass(color);
        }
    });


    useEffect(() => {
        fetch("../data/data.json")
            .then(res => res.json())
            .then(res => {
                setData(res);
            });
    }, []);


    return <div>
        <BrowserRouter>
            <Navigation loggedInUser={loggedInUser} loggedInHandler={loggedInHandler}/>
            <Routes>
                <Route path={"/"}
                       element={<Messages
                           data={data}
                           textClass={textClass}
                           nameClass={nameClass}
                       />}
                />
                <Route path={"/settings"} element={<Settings selectHandler={selectHandler}/>}/>
            </Routes>

        </BrowserRouter>


    </div>;
}