import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store/index.js';

// We will use this for the deploy:
import axios from 'axios'; 
import dotenv from "dotenv";
dotenv.config()
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
// --------------------------------

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

