import React from 'react';
import './estilositems.css';
import items from './items.json'

export default class ComponenteUnico extends React.Component {
    constructor(){
        super()
        this.puesto = React.createRef();
        this.empresa = React.createRef();
        this.pais = React.createRef();
        this.ciudad = React.createRef();
        this.listaItems = items;
    }

    state = {
        listaItemsShow : items
    }

    eliminarItem = (elementoBorrar) => {
        console.log("Eliminar item")
        const filtredData = this.listaItems.filter(item => item.id !== elementoBorrar)
        this.listaItems =filtredData
        console.log(this.listaItems)
        this.setState({ listaItemsShow : this.listaItems })
    }

    procesaBotonSubmit = (e) => {
        e.preventDefault();
        console.log("Boton enviar");
        console.log(this.listaItems);
        console.log(this.puesto.current.value)
        if (this.puesto.current.value === '' || this.empresa.current.value === '' || this.ciudad.current.value === '' || this.pais.current.value === '') {
          this.setState({verMensaje: true})
          console.log('Alguno es nulo')
          return
        } else {
          console.log("Agregar contenido")
          const nuevoItem = {
            "id": this.listaItems.length+1,
            "puesto":this.puesto.current.value,
            "empresa":this.empresa.current.value,
            "pais":this.ciudad.current.value,
            "ciudad":this.pais.current.value,
          };
          this.listaItems = this.listaItems.concat(nuevoItem);
          this.setState({ listaItemsShow :  this.listaItems });
        }
        return
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
                    <form className="mbr-form form-with-styler mx-auto" onSubmit={this.procesaBotonSubmit}>
                        <p className="mbr-text mbr-fonts-style align-center mb-4 display-7">
                                            Por favor no deje campos vacíos.
                        </p>
                        {this.verMensaje ? (
                        <div className="row">
                            <div className="alert alert-danger col-12">Oops...! parece haber un campo vacío!</div>
                        </div>
                        ) : null}
                        <div className="dragArea row">
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group" data-for="puesto">
                            <input type="text" defaultValue="" placeholder="puesto" ref={this.puesto} className="form-control" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group" data-for="empresa">
                            <input type="text" defaultValue="" placeholder="empresa" ref={this.empresa} className="form-control" />
                        </div>
                        <div data-for="ciudad" className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input type="text" defaultValue="" placeholder="ciudad" ref={this.ciudad} className="form-control" />
                        </div>
                        <div data-for="pais" className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input type="text" defaultValue="" placeholder="pais" ref={this.pais} className="form-control" />
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
            <section className="team1 cid-svshQR3Kzv" id="ListaItemsView">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h3 className="align-center">
                                <strong>Listado de Items</strong>
                            </h3>
                        </div>
                        {this.listaItems.map((e) =>

                            <div className="col-sm-6 col-lg-4" key={e.id}>
                                <div className="card-wrap">
                                    <div className="content-wrap">
                                        <h5 className="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
                                            <strong>{e.puesto}</strong>
                                        </h5>
                                        <h6 className="mbr-role mbr-fonts-style align-center mb-3 display-7">
                                            <strong>{e.empresa}</strong>
                                        </h6>
                                        <p className="card-text mbr-fonts-style align-center display-7">
                                            {e.ciudad}
                                        </p>
                                        <p className="card-text mbr-fonts-style align-center display-7">
                                            {e.pais}
                                        </p>
                                        <button onClick={() => { this.eliminarItem(e.id) }} className="btn btn-outline-danger btn-block display-4">Eliminar este ítem</button>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            </section>
            </>

        );
    }

}
