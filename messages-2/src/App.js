import { useState, useEffect } from "react";

import {
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/Layout';
import Home from "./components/Home";
import Filters from "./components/Filters";
import Login from "./components/Login";
import Register from "./components/Register";

import allMessages from './data/messages';


function App() {

  const [messages, setMessages] = useState(allMessages);
  const [color, setColor] = useState('black');
  const [elem, setElem] = useState('textColor');

  useEffect(() => {
    messages.map( message => message[elem] = color );
    setMessages(messages);
  }, [messages, color, elem]);
  
  
  return (
    
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home messages={messages} />}/>
            <Route path="/filters" element={<Filters messages={messages} setColor={setColor} setElem={setElem} color={color} elem={elem} />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/login" element={<Register />}/>
          </Route>
        </Routes>
  );
}

export default App;
