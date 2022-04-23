import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store/index.js';
import { CookiesProvider } from 'react-cookie';

// We will use this for the deploy:
import axios from 'axios'; 
import dotenv from "dotenv";
dotenv.config()
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
// --------------------------------

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <Router>
        <App />
      </Router>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);

