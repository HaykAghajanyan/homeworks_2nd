import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Messages from './components/Messages';
import Selects from './components/Selects';

import './App.css';

function App() {
  const [messages, setMessages] = useState ([])
  useEffect (() => {
    fetch ("/db.json").then (res => res.json()).then (res => setMessages(res))
  }, []);
      
  const [color, setColor] = useState ('Choose the color');
  const [field, setField] = useState ('Choose the field');
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Messages</Link>
            </li>
            <li>
              <Link to="/selects">Selects</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          
          <Route path="/selects" element= {<Selects color = {color} field ={field} setColor = {setColor} setField = {setField}/>}/>
          <Route path="/" element= {<Messages messages ={messages} color = {color} field ={field}/>}/>
        </Routes>
      </header>
    </Router>

  );
}

export default App;
