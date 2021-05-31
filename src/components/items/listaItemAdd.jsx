import React from 'react';
import './estilositems.css';
import axios from 'axios';

export default class ListaItemAdd extends React.Component {

  getEmpresas = async () => {
    const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/organizations")
    this.setState({ empresas: res.data });
  };

  getJobs = async () => {
    const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/jobs?_expand=organization')
    this.setState({ jobs: res.data });
  };
  //***** Fin Area de APIs *******/

  state = {
    idpais: 'Elija',
    idciudad: '',
    empresa: '',
    jobs: [],
    description: '',
    paises: [],
    ciudades: [],
    empresas: [],
    empresasfiltradas: [],
    listaItems: [],
    verMensaje: false
  }

  componentDidMount() {    
        this.getEmpresas();
  }

  handlePuestoInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ puesto: e.target.value });
  };

  handleDescriptionInput = e => {
    this.setState({ verMensaje: false });
    this.setState({ description: e.target.value });
  };

  handleEmpresaSelect = e => {
    console.log(e.target.value)
    this.setState({ verMensaje: false });
    this.setState({ empresa: e.target.value }, () => {
      var filtredData = [];
      console.log(this.state.empresa, this.state.empresas)
      if (this.state.empresas !== "") {
        filtredData = this.state.empresas.filter(item => item.Ciudad === this.state.ciudad);
      } else {
        filtredData = { "Empresa": "No hay cargadas aún" }
      }
      console.log(filtredData);
      this.setState({ empresasfiltradas: filtredData }, () => {
        console.log(this.state.empresasfiltradas, 'empresasfiltradas');
      });
    });
    console.log(this.state.empresasfiltradas);
  };


  handleOnSubmit = e => {
    e.preventDefault()
    console.log("this state", this.state)
    if (this.state.puesto === '' || this.state.empresa === '' || this.state.ciudad === '' || this.state.pais === '') {
      this.setState({ verMensaje: true })
      console.log('Alguno es nulo')
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
                <strong>Agregar job</strong>
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

                    {/* Select Organization */}
                    <div data-for="empresa" className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <select className="col-md col-12 form-control"
                        value={this.state.idempresa}
                        onChange={this.handleEmpresaSelect}>
                        {this.state.empresas.map((e) =>
                          <option key={e.id} value={e.id}>{e.name}</option>
                        )}
                      </select>
                    </div>

                    {/* Input Job */}
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input type="text"
                        value={this.state.puesto}
                        onChange={this.handlePuestoInput}
                        placeholder="puesto"
                        className="form-control" />
                    </div>
                    {/* Input Job */}
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input type="text"
                        value={this.state.description}
                        onChange={this.handleDescriptionInput}
                        placeholder="descripcion"
                        className="form-control" />
                    </div>

                    <div className="col-auto mbr-section-btn align-center">
                      <button type="submit" className="btn btn-primary display-4">Agregar job</button>
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
