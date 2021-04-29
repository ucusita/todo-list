import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './components/menu/Menu';
import ListaItemAdd from './components/items/listaItemAdd';
import ListaItemView from './components/items/listaItemView';
import Footer from './components/footer/Footer';
//import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4

// class Principal extends React.Component{
//   state = {
//     listaItems : items
//   }
// }

// const fnAgregar = (elemento) => {
//   //this.setState({ listadeitems : this.props.listadeitems.concat(nuevoItem) });
// }

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <App />
    <ListaItemAdd/>
    <ListaItemView />
    <Footer />
  </React.StrictMode>,  
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
