import React from 'react';
import './estilositems.css';

export default class ListaItemAdd extends React.Component {

  state = {
    puesto: '',
    empresa: '',
    pais: '',
    ciudad: '',
    verMensaje: false
  }


  handlePuestoInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ puesto: e.target.value });
  };
  handleEmpresaInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ empresa: e.target.value });
  };
  handleCiudadInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ ciudad: e.target.value });
  };
  handlePaisInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ pais: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.submit(this.state)
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
                    <div data-for="ciudad" className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input type="text"
                        placeholder="ciudad"
                        value={this.state.ciudad}
                        onChange={this.handleCiudadInput}
                        className="form-control" />
                    </div>
                    <div data-for="pais" className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input type="text"
                        placeholder="pais"
                        value={this.state.pais}
                        onChange={this.handlePaisInput}
                        className="form-control" />
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
