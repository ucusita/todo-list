import React from 'react';
import './estilositems.css';

export default class ListaItemAdd extends React.Component {

  state = {
    puesto: '',
    empresa: '',
    pais: '',
    ciudad: '',
    verMensaje: false,
    paises: JSON.parse(localStorage.getItem('Paises')) ? JSON.parse(localStorage.getItem('Paises')) : [],
    ciudades: JSON.parse(localStorage.getItem('Ciudades')),
    ciudadesfiltradas: JSON.parse(localStorage.getItem('Ciudades'))
  }


  handlePuestoInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ puesto: e.target.value });
  };
  handleEmpresaInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ empresa: e.target.value });
  };

  handlePaisSelect = e => {
    this.setState({ verMensaje: false });
    this.setState({ pais: e.target.value });
    const filtredData = this.state.ciudades.filter(item => item.Pais === e.target.value);
    console.log(filtredData);
    this.setState({ ciudadesfiltradas: filtredData }, () => {
      console.log(this.state.ciudadesfiltradas, 'ciudadesfiltradas');
    });
    console.log(this.state.ciudadesfiltradas);
  };
  handleCiudadSelect = e => {
    this.setState({ verMensaje: false });
    this.setState({ ciudad: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault()
    if (e.puesto === '' || e.empresa === '' || e.ciudad === '' || e.pais === '') {
      this.setState({ verMensaje: true })
      console.log('Alguno es nulo')
      alert('Algun campo es nulo')
      return
    }
    console.log(this.state)
    this.props.agregarItem(this.state)
  }

  render() {
    return (

      <>
        <section className="form7 cid-svshEnHSRq" id="ListaItemAdd">
          <div className="container">
            <div className="mbr-section-head">
              <h3 className="align-center">
                <strong>Agregar ítem</strong>
              </h3>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                <form className="mbr-form form-with-styler mx-auto" onSubmit={this.handleOnSubmit.bind(this.state)}>
                  <p className="mbr-text mbr-fonts-style align-center mb-4 display-7">
                    Por favor no deje campos vacíos.
                            </p>
                  {this.state.verMensaje ? (
                    <div className="row">
                      <div className="alert alert-danger col-12">Oops...! parece haber un campo vacío!</div>
                    </div>
                  ) : null}
                  <div className="dragArea row">
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input type="text"
                        value={this.state.puesto}
                        onChange={this.handlePuestoInput}
                        placeholder="puesto"
                        className="form-control" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input type="text"
                        placeholder="empresa"
                        value={this.state.empresa}
                        onChange={this.handleEmpresaInput}
                        className="form-control" />
                    </div>
                    <div data-for="pais" className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <select className="col-md col-12 form-control"
                        value={this.state.pais}
                        onChange={this.handlePaisSelect}>
                        {this.state.paises.map((e, indice) =>
                          <option key={indice} value={e}>{e}</option>
                        )}
                      </select>
                    </div>
                    <div data-for="ciudad" className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <select className="col-md col-12 form-control"
                        value={this.state.ciudad}
                        onChange={this.handleCiudadSelect}>
                        {this.state.ciudadesfiltradas.map((e) =>
                          <option key={e.Ciudad} value={e.Ciudad}>{e.Ciudad}</option>
                        )}
                      </select>
                    </div>
                    <div className="col-auto mbr-section-btn align-center">
                      <button type="submit" className="btn btn-primary display-4">Agregar ítem</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

}
