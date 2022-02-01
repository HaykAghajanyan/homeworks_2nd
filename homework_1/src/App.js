import {
  BrowserRouter as Router,Route, Link, Routes
} from 'react-router-dom'
import Msg from './components/Msg';
import ChangeSettings from './components/ChangeSettings';
import{ useState, useEffect } from 'react';
import './App.css';

function App() {


  useEffect(() => {
    fetch('/msg_data/msg.json').then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
  });
  },[]);
  
  return (
     <Router>
       <div>
         <nav>
           <Link to="/msg">Messagges</Link><br/>
           <Link to="/settings">Change settings</Link><br/>
         </nav>
         <Routes>
           <Route path='msg' element={<Msg/>}></Route>
           <Route path='settings' element={<ChangeSettings/>}></Route>
         </Routes>
       </div>
     </Router>
  );
}

export default App;
