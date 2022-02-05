import React,{useState} from 'react';
import Testomponent from './components/Testomponent'; 
import Settings from './components/Settings';
import {Routes,
  Route,
  Link,
  Router} from 'react-router-dom'
  

function App() {
  const [color, setColor] = useState("")
  const [user, setUser] = useState("")
  return (
    <div className="App">
<Routes>
<Route path="/" element={<Testomponent color={color} user={user}/> }/>
<Route path="/settings" element={<Settings setColor={setColor} setUser={setUser} color={color} user={user}/>}/>
</Routes>
      
    </div>
  );
}

export default App;
