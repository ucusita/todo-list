import React from 'react';

import './estilositems.css';
import items from './items.json'
import Item from './item'

class ListaItemView extends React.Component {

    state = {
        listaItems : items
    }

    eliminarItem = (elementoBorrar) => {
        console.log("Eliminar item")
        const filtredData = this.state.listaItems.filter(item => item.id !== elementoBorrar);
        this.setState({ listaItems: filtredData });
    }

    procesaBotonSubmit = (e) => {
        e.preventDefault();
        console.log("Boton enviar");
        console.log(this.listadeitems);
        console.log(this.puesto.current.value)
        if (this.puesto.current.value === '' || this.empresa.current.value === '' || this.ciudad.current.value === '' || this.pais.current.value === '') {
          this.setState({verMensaje: true})
          console.log('Alguno es nulo')
          return
        } else {
          console.log("Agregar contenido")
          const nuevoItem = {
            "id": this.props.listadeitems.length+1,
            "puesto":this.puesto.current.value,
            "empresa":this.empresa.current.value,
            "pais":this.ciudad.current.value,
            "ciudad":this.pais.current.value,
          };
          this.setState({ listadeitems : this.props.listadeitems.concat(nuevoItem) });
        }
        return
      }

    render() {
        console.log(this.state.listaItems);
        return (

            <section className="team1 cid-svshQR3Kzv" id="ListaItemsView">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h3 className="align-center">
                                <strong>Listado de Items</strong>
                            </h3>
                        </div>
                        {this.state.listaItems.map((e) =>

                            <Item key={e.id} data={e} eliminar={ this.eliminarItem }/>,

                            {/* <div className="col-sm-6 col-lg-4" key={e.id}>
                                <div className="card-wrap">
                                    <div className="content-wrap">
                                        <h5 className="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
                                            <strong>{e.puesto}</strong>
                                        </h5>
                                        <h6 className="mbr-role mbr-fonts-style align-center mb-3 display-4">
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
                            </div> */}
                        )
                        }
                    </div>
                </div>
            </section>


        );
    }

}

export default ListaItemView;