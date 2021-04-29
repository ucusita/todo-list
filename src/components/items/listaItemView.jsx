import React from 'react';

import './estilositems.css';
import items from './items.json'
import Item from './item'
import ListaItemAdd from './listaItemAdd';

class ListaItemView extends React.Component {

    state = {
        listaItems: items,
        verMensaje: false
    }

    eliminarItem = (elementoBorrar) => {
        console.log("Eliminar item")
        const filtredData = this.state.listaItems.filter(item => item.id !== elementoBorrar);
        this.setState({ listaItems: filtredData });
    }

    procesaBotonSubmit = (e) => {        
        console.log("Boton enviar",e);
        if (e.puesto === '' || e.empresa === '' || e.ciudad === '' || e.pais === '') {
            this.setState({ verMensaje: true })
            console.log('Alguno es nulo')
            return
        } else {
            console.log("Agregar contenido")
            const nuevoItem = {
                "id": this.state.listaItems.length + 1,
                "puesto": e.puesto,
                "empresa": e.empresa,
                "pais": e.ciudad,
                "ciudad": e.pais,
            };
            this.setState({ listaItems: this.state.listaItems.concat(nuevoItem) });
        }
        return
    }

    render() {
        console.log("states", this.state.listaItems);
        return (
            <>
                <ListaItemAdd submit={this.procesaBotonSubmit} />
                <section className="team1 cid-svshQR3Kzv" id="ListaItemsView">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <h3 className="align-center">
                                    <strong>Listado de Items</strong>
                                </h3>
                            </div>
                            {this.state.listaItems.map((e) =>
                                <Item key={e.id} data={e} eliminar={this.eliminarItem} />,
                            )
                            }
                        </div>
                    </div>
                </section>
            </>

        );
    }

}

export default ListaItemView;