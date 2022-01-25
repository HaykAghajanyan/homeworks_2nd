import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar';
import Messages from './components/Messages';
import Main from './components/Main';
import { useState, useEffect} from 'react';

function App() {

  
  const [data, setData] = useState();
  const [color, setColor] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    fetch('/db.json')
        .then(res => res.json())
        .then(res => {
          console.log(res)
            setData(res);
        });
}, [])


  return (
    <BrowserRouter>
    <div className='row'>
      <Navbar />
        <Routes>
          <Route  path='/messages' element={<Messages data={data} selectedItem={selectedItem} color={color} />}/>
          <Route path='/main' element={<Main setColor={setColor} setSelectedItem={setSelectedItem}/>} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
