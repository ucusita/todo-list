import React from 'react';
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import './estilositems.css';
import items from './items.json'

export default class ComponenteUnico extends React.Component {

    state = {
        listaItemsShow: items,
        puesto: '',
        empresa: '',
        pais: '',
        ciudad: '',
        verMensaje: false,
        verModal: false
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

    showModal = e => this.setState({ verModal: true });
    hideModal = e => this.setState({ verModal: false });

    eliminarItem = (elementoBorrar) => {
        console.log("Eliminar item")
        const filtredData = this.state.listaItemsShow.filter(item => item.id !== elementoBorrar)
        this.setState({ listaItemsShow: filtredData })
    }

    procesaBotonSubmit = (e) => {
        e.preventDefault();
        console.log("Boton enviar");
        console.log(this.state.listaItemsShow);
        if (this.state.puesto === '' || this.state.empresa === '' || this.state.ciudad === '' || this.state.pais === '') {
            this.setState({ verMensaje: true });
            console.log('Alguno es nulo');
            return
        } else {
            console.log("Agregar contenido")
            const nuevoItem = {
                "id": this.state.listaItemsShow.length + 1,
                "puesto": this.state.puesto,
                "empresa": this.state.empresa,
                "pais": this.state.ciudad,
                "ciudad": this.state.pais,
            };
            this.setState({ listaItemsShow: this.state.listaItemsShow.concat(nuevoItem) });
            this.setState({
                puesto: '',
                empresa: '',
                pais: '',
                ciudad: ''
            });
            //alert("Item agregado");
            this.showModal();
            return;

        }
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
                <section className="team1 cid-svshQR3Kzv" id="ListaItemsView">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <h3 className="align-center">
                                    <strong>Listado de Items</strong>
                                </h3>
                            </div>
                            {this.state.listaItemsShow.map((e) =>

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

                <section>
                    <div>
                        <Modal show={this.state.verModal} >
                            <Modal.Header>
                                <Modal.Title>Correcto</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Los datos han sido agregados al listado!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={this.hideModal}>Cerrar</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </section>
            </>

        );
    }

}

