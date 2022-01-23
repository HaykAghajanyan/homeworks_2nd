import './App.css';
import { useState } from "react";
import Settings from "./components/settings";
import {
    BrowserRouter as Router, Route, Link, Routes,
} from 'react-router-dom';

import Home from "./components/Home";

function App() {
    const [color, setColor] = useState('black');
    const [elem, setElem] = useState('name');

    function changeColor(color) {
        setColor(color);
    }
    function changeElem(elem) {
        setElem(elem);
    }
    return (
    <div className="App">
        <Router>
            <div>
                <nav className='classnav'>
                    <Link to ='/' className='classnav'>Home</Link>
                    <Link to ='/settings'>Settings</Link>
                </nav>
                <Routes>
                    <Route
                        path='/settings'
                        element ={
                        <Settings
                            color={color}
                            elem={elem}
                            changeColor={changeColor}
                            changeElem={changeElem}
                        />
                        }
                    />
                    <Route path='/' element ={<Home color={color} elem={elem}/>}/>
                </Routes>
            </div>
        </Router>
    </div>
   );
}


export default App;