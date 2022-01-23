import './App.css';
import React, {useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Select from './components/select/selects';
import Home from './components/home/home';
import Colors from './helpers/constants/constants';

function App() {
  const [color, setColor] = useState(Colors[0])
  const [attr, setAttr] = useState('Text')

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link><br />
          <Link to="/select">Select</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home color={color} attr={attr} />} />
          <Route path="/select" element={<Select color={color} setColor={setColor} attr={attr} setAttr={setAttr} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
