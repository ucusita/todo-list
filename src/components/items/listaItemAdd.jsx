import React from 'react';
import './estilositems.css';

import items from './items.json'

class ListaItemAdd extends React.Component {
  state = {
    listadeitems : items
  }
  
  procesaBotonSubmit=()=> {
    console.log("Boton enviar");
    return (
      <>
      </>
    )
  }

  render() {
    return (

      <section className="form7 cid-svshEnHSRq" id="ListaItemAdd">
        <div className="container">
          <div className="mbr-section-head">
            <h3 className="align-center">
              <strong>Agregar ítem</strong>
            </h3>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
              <form className="mbr-form form-with-styler mx-auto" data-form-title="Form Name">
                <p className="mbr-text mbr-fonts-style align-center mb-4 display-7">
                  Por favor no deje campos vacíos.
                    </p>
                <div className="row">
                  <div hidden="hidden" data-form-alert-danger className="alert alert-danger col-12">Oops...! parece haber un campo vacío!</div>
                </div>
                <div className="dragArea row">
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group" data-for="puesto">
                    <input type="text" name="puesto" placeholder="puesto" data-form-field="puesto" className="form-control" id="puesto-form7-0" />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group" data-for="empresa">
                    <input type="text" name="empresa" placeholder="empresa" data-form-field="empresa" className="form-control" id="empresa-form7-0" />
                  </div>
                  <div data-for="ciudad" className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <input type="text" name="ciudad" placeholder="ciudad" data-form-field="ciudad" className="form-control" id="ciudad-form7-0" />
                  </div>
                  <div data-for="pais" className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <input type="text" name="pais" placeholder="pais" data-form-field="pais" className="form-control" id="pais-form7-0" />
                  </div>
                  <div className="col-auto mbr-section-btn align-center">
                    <button onClick={this.procesaBotonSubmit} className="btn btn-primary display-4">Agregar ítem</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    );
  }

}

export default ListaItemAdd;