import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import './assets/index.css';
import App from './App.jsx';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

