import './App.css';
import ListaItemView from './components/items/listaItemView';
import PaisesAdd from './components/paises/PaisesAdd';
import ListaItemAdd from './components/items/listaItemAdd';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import CiudadesAdd from './components/paises/CiudadesAdd';

import {
  Switch,
  Route
} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4

function App() {
  return (
    <>      
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route path="/ListaItemAdd">
          <ListaItemAdd />
        </Route>
        <Route path="/ListaItemView">
          <ListaItemView />
        </Route>
        <Route path="/Paises">
          <PaisesAdd />
        </Route>
        <Route path="/Ciudades">
          <CiudadesAdd />
        </Route>
      </Switch>,
      <Footer />
    </>
  );
}

export default App;
