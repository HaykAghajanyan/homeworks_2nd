import {useEffect, useState} from "react";
import Navigation from "./components/navigation";
import Messages from "./components/messages"

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
        <Navigation/>
        <div>
           <Messages data = {data}/>
        </div>
    </div>;
}

export default App;
