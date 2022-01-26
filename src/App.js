import './App.css';
import Messages from './components//Messages/Messages';
import { Route, Routes } from 'react-router-dom';
import Selectors from './components/Selectors/Selectors';
import NavBar from './components/NavBar/NavBar';
import React, { useState } from 'react';

const messages = [
  {
    "id": "1",
    "name": "Alex",
    "date": "17/05/2021",
    "text": "Hello Hayk",
    "textColor": "black",
    "nameColor": "black"
  },
  {
    "id": "2",
    "name": "Hayk",
    "date": "21/03/2020",
    "text": "I`ll be late today",
    "textColor": "black",
    "nameColor": "black"
  },
  {
    "id": "3",
    "name": "Karen",
    "date": "13/09/2021",
    "text": "Hey man, when can you come to hang over? I`ll be free today",
    "textColor": "black",
    "nameColor": "black"
  },
  {
    "id": "4",
    "name": "Alex",
    "date": "13/09/2021",
    "text": "Hi, maybe I`ll be free after work today. I`ll call you",
    "textColor": "black",
    "nameColor": "black"

  },
  {
    "id": "5",
    "name": "Hayk",
    "date": "21/03/2020",
    "text": "Yesterday I did great job with my application, you can check it out on my page",
    "textColor": "black",
    "nameColor": "black"
  },
  {
    "id": "6",
    "name": "Karen",
    "date": "1/01/2022",
    "text": "Merry Christmas and a happy New Year",
    "textColor": "black",
    "nameColor": "black"
  },
  {
    "id": "7",
    "name": "Alex",
    "date": "17/05/2021",
    "text": "My car is in service center now, I can`t visit you",
    "textColor": "black",
    "nameColor": "black"

  },
  {
    "id": "8",
    "name": "Hayk",
    "date": "21/03/2020",
    "text": "So, what is up with that job?",
    "textColor": "black",
    "nameColor": "black"
  },
  {
    "id": "9",
    "name": "Karen",
    "date": "13/07/2021",
    "text": "Have you ever thought about living in another country?",
    "textColor": "black",
    "nameColor": "black"
  }
]

function App() {

  const [color, setColor] = useState('')
 
  const textNameChange = (textName) => {
    if(textName === "text") {
      messages.map(obj => obj.textColor = color)
      console.log(messages);
    } else if(textName === "name"){
      messages.map(obj => obj.nameColor = color)
      console.log(messages);
    }
  }
  
  const colorChange = (colorChange) => {
    setColor(colorChange)
  }

  return (
    <div className="app-wrapper">
      <NavBar />
      <Routes>
        <Route path='' element={<Messages messages={messages} />} />
        <Route path='selectors' element={<Selectors colorChange={colorChange} textNameChange={textNameChange} />} />
      </Routes>
    </div>
  );
}

export default App;