import React from 'react';
import './../../styles/mbr-additional.css';
import axios from 'axios';
import City from './CityView';

export default class CitiesAdd extends React.Component {
  //***** Area de API ******/
  getCountries = async () => {
    const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/countries")
    this.setState({ paises: res.data });
  };

  getCiudades = async () => {
    const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/places")
    this.setState({ ciudades: res.data });
  }

  postCity = async (data) => {
    console.log("Data en postCity:", data);
    console.log("Detalles:", data.ciudad, data.countrieId);
    const configRequest = {
      method: 'post',
      url: 'https://api-fake-pilar-tecno.herokuapp.com/places',
      data: {
        name: data.ciudad,
        countrieId: data.countrieId
      }
    }
    try {
      const res = await axios(configRequest)
      return res.data
    } catch (err) {
      alert('Ocurrió un error ⚠');

    }
  };

  deleteCity = async (id) => {
    const configRequest = {
      method: 'DELETE',
      url: 'https://api-fake-pilar-tecno.herokuapp.com/places/' + id,

    }
    try {
      const res = await axios(configRequest)
      return res.data
    } catch (err) {
      return (console.log('error'))

    }
  };
  //***** Fin Area de APIs *******

  state = {
    idpais: '',
    ciudad: '',
    verMensaje: false,
    paises: [],
    ciudades: []
  }

  componentDidMount() {
    this.getCountries();
    this.getCiudades();
  }

  //********   Handlers  *******
  handleEliminarCall = (e) => this.deleteCity(e).then((resD) => this.componentDidMount());

  handlePaisSelect = e => {
    this.setState({ verMensaje: false });
    this.setState({ idpais: e.target.value });
  };
  handleCiudadInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ ciudad: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault()
    console.log("Estado  inicial", this.state);
    if (this.state.ciudad === '' || this.state.idpais === '') {
      this.setState({ verMensaje: true })
      console.log('Alguno es nulo')
    }
    let data = { ciudad: this.state.ciudad, countrieId: this.state.idpais };
    this.postCity(data).then((res) =>
      this.componentDidMount()
    );
  }
  //********  Fin Handlers  *******
  
  render() {
    return (

      <>
        <section className="form1 cid-sw58p9UJED mbr-fullscreen mbr-parallax-background" id="form1-3">
          <div className="mbr-overlay" style={{ opacity: '0.5', backgroundColor: 'rgb(255, 255, 255)' }} />
          <div className="align-center container">
            <div className="row justify-content-center">
              <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                <form onSubmit={this.handleOnSubmit.bind(this.state)} className="mbr-form form-with-styler" data-form-title="Form Name">
                  <div className="dragArea row">
                    <div className="col-12">
                      <h1 className="mbr-section-title mb-4 display-2">
                        <strong>Carga de ciudades</strong></h1>
                    </div>
                    <div className="col-12">
                      <p className="mbr-text mbr-fonts-style mb-5 display-7">Elija el país del lado izquierdo e ingrese la nueva ciudad.</p>
                    </div>
                    <div className="row">
                      {this.state.verMensaje ? (
                        <div className="row">
                          <div className="alert alert-danger col-12">Oops...! parece haber un campo vacío!</div>
                        </div>
                      ) : null}
                    </div>

                    <div className="col-md col-12 form-group" data-for="name">
                      <select className="col-md col-12 form-control"
                        defaultValue={this.state.paises[0]}
                        value={this.state.idpais}
                        onChange={this.handlePaisSelect}>
                        <option value=''>Elija un país</option>
                        {this.state.paises.map((e) =>
                          <option key={e.id} value={e.id}>{e.name}</option>
                        )}
                      </select>
                    </div>

                    <div className="col-md col-12 form-group" data-for="email">
                      <input type="text"
                        value={this.state.ciudad}
                        onChange={this.handleCiudadInput}
                        placeholder="ciudad"
                        className="form-control" />
                    </div>
                    <div className="mbr-section-btn col-12 col-md-auto"><button type="submit" className="btn btn-primary display-4">Agregar</button></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="team1 cid-svshQR3Kzv" id="ListaItemsView">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <h3 className="align-center">
                  <strong>Listado de Ciudades</strong>
                </h3>
              </div>
              {this.state.ciudades.map((e) =>
                <City key={e.id.toString()} data={e} eliminar={this.handleEliminarCall.bind(this.state)} />,
              )
              }
            </div>
          </div>
        </section>

      </>
    );
  }

}
