import React from 'react';
import './../../styles/mbr-additional.css'

export default class CiudadesAdd extends React.Component {

  state = {
    pais: '',
    ciudad: '',
    verMensaje: false,
    paises: JSON.parse(localStorage.getItem('Paises')) ? JSON.parse(localStorage.getItem('Paises')) : [],
    ciudades: JSON.parse(localStorage.getItem('Ciudades')) ? JSON.parse(localStorage.getItem('Ciudades')) : []
  }


  handlePaisSelect = e => {
    this.setState({ verMensaje: false });
    this.setState({ pais: e.target.value });
  };
  handleCiudadInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ ciudad: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault()
    console.log("Estad  inicial", this.state);
    if (this.state.ciudad === '' || this.state.pais === '') {
      this.setState({ verMensaje: true })
      console.log('Alguno es nulo')
      return
    }
    var nuevaciudad = { "Pais": this.state.pais, "Ciudad": this.state.ciudad }
    this.state.ciudades.push(nuevaciudad)
    localStorage.setItem("Ciudades", JSON.stringify(this.state.ciudades))
    console.log(JSON.stringify(this.state.ciudades))
    var a = localStorage.getItem("Ciudades")
    console.log(a)
    this.setState({ ciudad: '' })

  }

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
                        defaultValue={this.state.pais[0]}
                        value={this.state.pais}
                        onChange={this.handlePaisSelect}>
                        <option value=''>Elija un país</option>
                        {this.state.paises.map((e) =>
                          <option key={e} value={e}>{e}</option>
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
      </>
    );
  }

}
