import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {fetchMessages} from "./redux/ducks/messageDuck"

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

store.dispatch(fetchMessages);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
