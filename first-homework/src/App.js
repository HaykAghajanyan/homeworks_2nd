import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Messages from './components/Messages';
import Selects from './components/Selects';
import Home from './components/Home';

import './App.css';

function App() {
  const [messages, setMessages] = useState ([])
  useEffect (() => {
    fetch ("/db.json").then (res => res.json()).then (res => setMessages(res))
  }, []);
  
  const [color, setColor] = useState ('Choose the color');
  const [field, setField] = useState ('Choose the field');
  
  return (
    <header style={{width: "100%", backgroundColor: "lightcoral"}}>
      <Router>
        <nav style={{padding: "1%"}}>
          <Link style={{margin: "1%"}} to="/">Home</Link>
          <Link style={{margin: "1%"}} to="/messages">Messages</Link>
          <Link style={{margin: "1%"}} to="/selects">Selects</Link>
        </nav>
      
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/selects" element= {<Selects color = {color} field ={field} setColor = {setColor} setField = {setField}/>}/>
          <Route path="/Messages" element= {<Messages messages ={messages} color = {color} field ={field}/>}/>
          <Route path = "/" element= {<Home/>}/>
        </Routes>
      </Router>
    </header>
    
  );
}

export default App;
