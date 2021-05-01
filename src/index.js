import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';
import Menu from './components/menu/Menu';
//import ListaItemView from './components/items/listaItemView';
//import PaisesAdd from './components/paises/PaisesAdd';
//import Footer from './components/footer/Footer';
//import reportWebVitals from './reportWebVitals';
//import CiudadesAdd from './components/paises/CiudadesAdd';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4


ReactDOM.render(
    <Router>,
    <Menu />,
    <App />,
    </Router>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
