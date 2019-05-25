import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);