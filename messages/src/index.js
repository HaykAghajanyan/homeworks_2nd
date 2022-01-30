import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {
    BrowserRouter,
    BrowserRouter as Router,
} from "react-router-dom";
import MessagesProvider from "./contexts";



ReactDOM.render(
   <React.StrictMode>
       <BrowserRouter>
           <MessagesProvider>
               <App />
           </MessagesProvider>
       </BrowserRouter>
   </React.StrictMode>
    , document.getElementById("root"))  ;