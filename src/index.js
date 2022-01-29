import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './index.css';
import MessagesProvider from "./contexts/messagesContext";
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <MessagesProvider>
                    <App/>
                </MessagesProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
