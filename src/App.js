import './App.css';
import ListaItemView from './components/items/listaItemView';
import PaisesAdd from './components/paises/PaisesAdd';
import Footer from './components/footer/Footer';
import CiudadesAdd from './components/paises/CiudadesAdd';

function App() {
  return (
    <>
      <PaisesAdd />
      <CiudadesAdd />
      <ListaItemView />
      <div className="App">
        <header className="App-header">
          Opciones en el menú
      </header>
      </div>
      <Footer />
    </>
  );
}

export default App;
