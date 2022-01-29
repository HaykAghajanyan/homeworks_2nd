import {
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/Layout';
import Home from "./components/Home";
import Filters from "./components/Filters";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  
  return (
    
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />}/>
            <Route path="/filters" element={<Filters />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Route>
        </Routes>
  );
}

export default App;
