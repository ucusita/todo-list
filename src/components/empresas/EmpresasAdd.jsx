import React from 'react';
import './../../styles/mbr-additional.css'

export default class EmpresasAdd extends React.Component {

  state = {
    pais: 'Elija',
    ciudad: '',
    empresa: '',
    verMensaje: '',
    paises: JSON.parse(localStorage.getItem('Paises')) ? JSON.parse(localStorage.getItem('Paises')) : [],
    ciudades: JSON.parse(localStorage.getItem('Ciudades')),
    ciudadesfiltradas: JSON.parse(localStorage.getItem('Ciudades')),
    empresas: JSON.parse(localStorage.getItem('Empresas')) ? JSON.parse(localStorage.getItem('Empresas')) : []
  }

  componentDidMount() {
    console.log(typeof this.state.paises[0])
    if (typeof this.state.paises[0]==='undefined') {
      this.setState({pais: ['No hay cargados aún']})
    }else{
      this.setState({pais: this.state.paises[0]})
    }    
  }


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

  handleEmpresaInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ empresa: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault()
    console.log("Estad  inicial", this.state);
    var nuevaempresa = { "Pais": this.state.pais, "Ciudad": this.state.ciudad, "Empresa": this.state.empresa }
    this.state.empresas.push(nuevaempresa)
    localStorage.setItem("Empresas", JSON.stringify(this.state.empresas))
    console.log(JSON.stringify(this.state.empresas))
    var a = localStorage.getItem("Empresas")
    console.log(a)
    this.setState({ empresa: '' })

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
                    <div className="col-md col-12 form-group" data-for="name">
                      <select className="col-md col-12 form-control"
                        value={this.state.pais}
                        onChange={this.handlePaisSelect}>
                        {this.state.paises.map((e) =>
                          <option key={e} value={e}>{e}</option>
                        )}
                      </select>
                    </div>
                    <div className="col-md col-12 form-group" data-for="name">
                    <select className="col-md col-12 form-control"
                        value={this.state.ciudad}
                        onChange={this.handleCiudadSelect}>
                        {this.state.ciudadesfiltradas.map((e) =>
                          <option key={e.Ciudad} value={e.Ciudad}>{e.Ciudad}</option>
                        )}
                      </select>
                    </div>
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
      </>
    );
  }

}
