import React from 'react';
import './../../styles/mbr-additional.css'

export default class CiudadesAdd extends React.Component {

  state = {
    pais: '',
    ciudad: '',
    verMensaje: '',
    paises: JSON.parse(localStorage.getItem('paises')) ? JSON.parse(localStorage.getItem('paises')) : []
  }


  handleCiudadSelect = e => {
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
    if (this.state.pais !== "") {
      this.state.paises.push(this.state.pais)
    }
    alert("País agregado")

  }

  render() {
    console.log("CiudadesAdd",this.state.paises)
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
                        <strong>Carga de ciudades</strong></h1>
                    </div>
                    <div className="col-12">
                      <p className="mbr-text mbr-fonts-style mb-5 display-7">Elija el país del lado izquierdo e ingrese la nueva ciudad.</p>
                    </div>
                    <div className="col-md col-12 form-group" data-for="name">
                      <select value={this.state.value} onChange={this.handleCiudadSelect} >
                        {this.state.paises.map((e) => 
                          <option value={e.ciudad}>{e.ciudad}</option>
                        )
                        }
                        <option value="mango">Mango</option>
                      </select>
                      <input type="text"
                        value={this.state.pais}
                        onChange={this.handlePaisInput}
                        placeholder="país"
                        className="form-control" />
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
