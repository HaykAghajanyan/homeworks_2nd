import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/lib/components/Provider";
import {Store} from "./Redux/store";

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);
