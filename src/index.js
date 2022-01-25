import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "./store/Store";
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <StoreProvider>
                <App/>
            </StoreProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
