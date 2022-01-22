import {Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from "./pages/home"
import Select from "./pages/select"

function App() {
  const [colors, setColors] = useState()
  const[text,setText]=useState()
  const selected = (selectColor) => {
    setColors(selectColor)
  }
  const selectText=(choosenText)=>{
    setText(choosenText)
  }


  return (
    <>
      <header className='head'>
        <Link to="/">Home</Link> 
        <Link to='/select'>Select</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home colors={colors}  text={text} />}/>
        <Route path="/select" element={<Select selected={selected} selectText={selectText}/>}/>
      </Routes> 
    </>
  );
}

export default App;
