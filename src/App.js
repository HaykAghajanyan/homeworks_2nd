import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import Select from './components/Select.js';
import Messages from './components/Messages';

import './App.css';


function App() {


  return (
    <Router>
      <header>
        <nav className='navigation'>
          <Link to="/"> Messages </Link> <br/>  
          <Link to="/change-colors"> Change </Link> <br/>
        </nav>

        <Routes>
          <Route path="/" element = {<Messages />} />
          <Route path="/change-colors" element = {<Select />} /> 
        </Routes>

      </header>
    </Router>
  )
}

export default App;
