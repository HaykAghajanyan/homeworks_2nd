import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar';
import Messages from './components/Messages';
import Main from './components/Main';
import { useState, useEffect} from 'react';

function App() {

  
  const [data, setData] = useState();


  useEffect(() => {
    fetch('/db.json')
        .then(res => res.json())
        .then(res => {
          console.log(res)
            setData(res);
        });
}, [])
//   useEffect(() => {
//     fetch('../public/db.json')
//         .then(res => res.json())
//         .then(res => {
//           console.log(res);
//             setData(res);
//         });
// }, [])



  return (
    <BrowserRouter>
    <div className='row'>
      <Navbar />
        <Routes>
          <Route  path='/messages' element={<Messages data={data}  />}/>
          <Route path='/main' element={<Main />} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
