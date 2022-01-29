import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';

export const StoreContext = createContext({})

ReactDOM.render(
    <StoreContext.Provider value={{auth: false}}>
        <Router>
            <App/>
        </Router>
    </StoreContext.Provider>,
    document.getElementById('root')
);
