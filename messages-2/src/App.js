import { useState, useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/Layout';
import Home from "./components/Home";
import Filters from "./components/Filters";
import allMessages from './data/messages';


function App() {

  const [messages, setMessages] = useState(allMessages);
  const [color, setColor] = useState('black');
  const [elem, setElem] = useState('textColor');

  useEffect(() => {
    messages.map( message => message[elem] = color );
    setMessages(messages);
  }, [color, elem]);
  
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>

            <Route index element={<Home messages={messages} />}></Route>

            <Route path="/filters" element={<Filters messages={messages} setColor={setColor} setElem={setElem} color={color} elem={elem} />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
