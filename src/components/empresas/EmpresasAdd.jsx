import React from 'react';
import './../../styles/mbr-additional.css';
import axios from 'axios';
import Empresa from './EmpresaView'

export default class EmpresasAdd extends React.Component {
  //***** Area de API ******/
  getCountries = async () => {
    const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/countries")
    this.setState({ paises: res.data });
  };

  getCiudades = async () => {
    const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/places")
    this.setState({ ciudades: res.data });
  }

  getCiudadesFiltradas = async () => {
    const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/places")
    this.setState({ ciudades: res.data });
  }

  getEmpresas = async () => {
    const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/organizations")
    this.setState({ empresas: res.data });
  };

  postEmpresa = async (data) => {
    console.log("Data en postEmpresa:", data);
    console.log("Detalles:", data.empresa, data.idciudad);
    const configRequest = {
      method: 'post',
      url: 'https://api-fake-pilar-tecno.herokuapp.com/organizations',
      data: {
        name: data.empresa,
        placeId: data.idciudad
      }
    }
    const res = await axios(configRequest)
    return res.data
  };

  deleteEmpresa = async (id) => {
    const configRequest = {
      method: 'DELETE',
      url: 'https://api-fake-pilar-tecno.herokuapp.com/organizations/' + id,
    }
    const res = await axios(configRequest)
    return res.data
  };
  //***** Fin Area de APIs *******/
  state = {
    idpais: 'Elija',
    idciudad: '',
    empresa: '',
    verMensaje: '',
    paises: [],
    ciudades: [],
    ciudadesfiltradas: [],
    empresas: []
  }

  componentDidMount() {
    this.getCountries();
    this.getCiudades();
    this.getEmpresas();
  }

  //********   Handlers  *******
  handleEliminarCall = (e) => this.deleteEmpresa(e).then(() => this.componentDidMount());

  handlePaisSelect = e => {
    this.setState({ verMensaje: false });
    this.setState({ idpais: e.target.value });
    const filtredData = this.state.ciudades.filter(item => item.countrieId === e.target.value);
    console.log(filtredData);
    this.setState({ ciudadesfiltradas: filtredData }, () => {
      console.log(this.state.ciudadesfiltradas, 'ciudadesfiltradas');
    });
  };
  handleCiudadSelect = e => {
    this.setState({ verMensaje: false });
    this.setState({ idciudad: e.target.value });
  };
  handleEmpresaInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ empresa: e.target.value });
  };
  handleOnSubmit = e => {
    e.preventDefault()
    console.log("Estado inicial", this.state);
    let nuevaempresa = { "idciudad": this.state.idciudad, "empresa": this.state.empresa }
    this.postEmpresa(nuevaempresa).then((res) =>
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
                  <div className="row">
                    {this.state.verMensaje ? (
                      <div hidden="hidden" data-form-alert-danger className="alert alert-danger col-12">Oops...! No parece haber ingresado nada</div>
                    ) : null}
                  </div>
                  <div className="dragArea row">
                    <div className="col-12">
                      <h1 className="mbr-section-title mb-4 display-2">
                        <strong>Carga de empresas</strong></h1>
                    </div>
                    <div className="col-12">
                      <p className="mbr-text mbr-fonts-style mb-5 display-7">Elija el país y la ciudad a la que pertenece la empresa.</p>
                    </div>
                    {/* Select pais */}
                    <div className="col-md col-12 form-group" data-for="name">
                      <select className="col-md col-12 form-control"
                        value={this.state.idpais}
                        onChange={this.handlePaisSelect}>
                        {this.state.paises.map((e) =>
                          <option key={e.id} value={e.id}>{e.name}</option>
                        )}
                      </select>
                    </div>
                    {/* Select city */}
                    <div className="col-md col-12 form-group" data-for="name">
                      <select className="col-md col-12 form-control"
                        value={this.state.idciudad}
                        onChange={this.handleCiudadSelect}>
                        {this.state.ciudadesfiltradas.map((e) =>
                          <option key={e.id} value={e.id}>{e.name}</option>
                        )}
                      </select>
                    </div>
                    {/* Input Organization */}
                    <div className="col-md col-12 form-group" data-for="email">
                      <input type="text"
                        value={this.state.empresa}
                        onChange={this.handleEmpresaInput}
                        placeholder="empresa"
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
                  <strong>Listado de Empresas</strong>
                </h3>
              </div>
              {this.state.empresas.map((e) =>
                <Empresa key={e.id.toString()} data={e} eliminar={this.handleEliminarCall.bind(this.state)} />,
              )}
            </div>
          </div>
        </section>
      </>
    );
  }

}
