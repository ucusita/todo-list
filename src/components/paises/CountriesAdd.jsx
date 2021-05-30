import React from 'react';
import './../../styles/mbr-additional.css'
import axios from 'axios';
import Country from './CountryView'

export default class CountriesAdd extends React.Component {

  getCountries = async () => {
    console.log('getting countries');
    try {
      const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/countries")
      this.setState({countries : res.data });
    } catch (err) {
      alert('Ocurrió un error ⚠');
    }
  };

  postCountry = async (countrie) => {
    const configRequest = {
      method: 'post',
      url: 'https://api-fake-pilar-tecno.herokuapp.com/countries',
      data: { name: countrie }
    }
    try {
      const res = await axios(configRequest)
      return res.data
    } catch (err) {
      alert('Ocurrió un error ⚠');

    }
  };

  deleteCountry = async (id) => {
    const configRequest = {
      method: 'DELETE',
      url: 'https://api-fake-pilar-tecno.herokuapp.com/countries/' + id,

    }
    try {
      const res = await axios(configRequest)
      return res.data
    } catch (err) {
      return (console.log('error'))

    }
  };

  async componentDidMount() {  this.getCountries();  }

  state = {
    pais: '',
    verMensaje: false,
    countries: []
  }

  handleEliminarCall = (e) => this.deleteCountry(e).then((resD) => this.getCountries() );

  handlePaisInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ pais: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault()
    if (this.state.pais === '') {
      this.setState({ verMensaje: true });
      console.log('mmm, el país es nulo');
    } else {
      this.postCountry(this.state.pais).then((res) =>
        this.setState({
          countries: [...this.state.countries, res],
        })
      );
      this.setState({ pais: '' });
    }

  }

  render() {
    return (
      <>
        <section className="form1 cid-sw58p9UJED mbr-fullscreen mbr-parallax-background" id="form1-3">
          <div className="mbr-overlay" style={{ opacity: '0.5', backgroundColor: 'rgb(255, 255, 255)' }} />
          <div className="align-center container">
            <div className="row justify-content-center">
              <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                <form onSubmit={this.handleOnSubmit.bind(this.state)} className="mbr-form form-with-styler">
                  <div className="dragArea row">
                    <div className="col-12">
                      <h1 className="mbr-section-title mb-4 display-2">
                        <strong>Carga de países</strong></h1>
                    </div>
                    <div className="col-12">
                      <p className="mbr-text mbr-fonts-style mb-5 display-7">Cargue el nuevo país</p>
                    </div>
                    <div className="row">
                      {this.state.verMensaje ? (
                        <div className="row">
                          <div className="alert alert-danger col-12">Oops...! parece haber un campo vacío!</div>
                        </div>
                      ) : null}
                    </div>
                    <div className="col-md col-12 form-group" data-for="name">
                      <input type="text"
                        value={this.state.pais}
                        onChange={this.handlePaisInput}
                        placeholder="Ingrese el país"
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
                  <strong>Listado de Países</strong>
                </h3>
              </div>
              {this.state.countries.map((e) =>
                <Country key={e.id} data={e} eliminar={this.handleEliminarCall.bind(this.state)} actualizar={this.getCountries.bind()} />,
              )
              }
            </div>
          </div>
        </section>
      </>
    );
  }

}
