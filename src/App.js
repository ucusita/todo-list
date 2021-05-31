import './App.css';
import ListaItemView from './components/items/listaItemView';
import CountriesAdd from './components/paises/CountriesAdd';
import ListaItemAdd from './components/items/listaItemAdd';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import CitiesAdd from './components/paises/CitiesAdd';

import EmpresasAdd from './components/empresas/EmpresasAdd';

import {
  Switch,
  Route
} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4

import React from 'react';

export default class App extends React.Component {

  state = {
    verMensaje: false
  }

  eliminarItem = (elementoBorrar) => {
    console.log("Eliminar item")
    const filtredData = this.state.listaItems.filter(item => item.id !== elementoBorrar);
    this.setState({ listaItems: filtredData });
  }


  agregarItem = (e) => {
    console.log("Boton enviar", e)
    console.log("Agregar contenido")
    const nuevoItem = {
      "id": this.state.listaItems.length + 1,
      "puesto": e.puesto,
      "empresa": e.empresa,
      "pais": e.ciudad,
      "ciudad": e.pais
    };
    this.setState({ listaItems: this.state.listaItems.concat(nuevoItem) });
    alert("Agregado correctamente");
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/ListaItemAdd">
            <ListaItemAdd submit={this.procesaBotonSubmit} agregarItem={this.agregarItem} />
          </Route>
          <Route path="/ListaItemView">
            <ListaItemView items={this.state.listaItems} eliminarItem={this.eliminarItem} />
          </Route>
          <Route path="/Countries">
            <CountriesAdd />
          </Route>
          <Route path="/Cities">
            <CitiesAdd />
          </Route>
          <Route path="/Empresas">
            <EmpresasAdd />
          </Route>
        </Switch>,
        <Footer />
      </>
    )
  }
}