import React from "react";
import {useState} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

import Messages from "./components/messages/messages";
import Colors from "./components/color/colors";

function App() {

    const [colorOfText, setColorOfText] = useState();
    const [colorOfName, setColorOfName] = useState();

    function handlerSelection(colorSelection, itemSelection) {
        if (itemSelection === "name") {
            setColorOfName(colorSelection);
        } else if (itemSelection === "text") {
            setColorOfText(colorSelection);
        }
    }

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Messages</Link>
                    <span> <Link to="/chooseColor">Colors</Link> </span>
                </nav>

                <Routes>
                    <Route path='/' element={<Messages  colorOfText={colorOfText} colorOfName={colorOfName}/>} />
                    <Route path='/chooseColor' element={<Colors handlerSelection={handlerSelection}/>} />
                </Routes>

            </div>
        </Router>
    );
}

export default App;
