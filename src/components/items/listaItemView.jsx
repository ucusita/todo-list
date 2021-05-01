import React from 'react';

import './estilositems.css';
import Item from './item'

export default class ListaItemView extends React.Component {

    state = {
        listaItems: this.props.items, //items,
        verMensaje: false
    }

    eliminarItem = (elementoBorrar) => {
        const filtredData = this.state.listaItems.filter(item => item.id !== elementoBorrar);
        this.setState({ listaItems: filtredData });
        this.props.eliminarItem(elementoBorrar);
    }

    render() {
        console.log("states", this.state.listaItems);
        return (
            <>
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
