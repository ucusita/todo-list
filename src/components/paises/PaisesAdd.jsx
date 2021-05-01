import React from 'react';
import './../../styles/mbr-additional.css'

export default class PaisesAdd extends React.Component {

  state = {
    pais: '',
    verMensaje: false,
    paises: JSON.parse(localStorage.getItem('paises')) ? JSON.parse(localStorage.getItem('paises')) : []
  }

  handlePaisInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ pais: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault()
    console.log('Alguno es nulo',this.state.pais)
    if (this.state.pais === '') {
      this.setState({ verMensaje: true })
      console.log('Alguno es nulo')
      return
    } else {
      console.log(this.state, typeof this.state.paises)
      console.log("Lo inicializo");
      this.state.paises.push(this.state.pais)
      localStorage.setItem("Paises", JSON.stringify(this.state.paises))
      console.log(this.state)
      console.log(JSON.stringify(this.state.paises))
      var a = localStorage.getItem("Paises")
      console.log(a)
      this.setState({ pais: '' })
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
      </>
    );
  }

}
