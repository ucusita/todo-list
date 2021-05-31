import React from 'react';
import axios from 'axios';
import './estilositems.css';
import Item from './item'

export default class ListaItemView extends React.Component {
    //***** Area de API ******/
    getCountries = async () => {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/countries")
        this.setState({ paises: res.data });
    };

    getCiudades = async () => {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/places")
        this.setState({ ciudades: res.data });
    }

    getEmpresas = async () => {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/organizations")
        this.setState({ empresas: res.data });
    };

    getJobs = async () => {
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/jobs?_expand=organization')
        this.setState({ jobs : res.data });
    };

    postItem = async (data) => {
        console.log("Data en postEmpresa:", data);
        console.log("Detalles:", data.empresa, data.idciudad);
        const configRequest = {
            method: 'post',
            url: 'https://api-fake-pilar-tecno.herokuapp.com/organizations',
            data: {
                name: data.empresa,
                placeId: data.idciudad
            }
        }
        const res = await axios(configRequest)
        return res.data
    };

    deleteItem = async (id) => {
        const configRequest = {
            method: 'DELETE',
            url: 'https://api-fake-pilar-tecno.herokuapp.com/jobs/' + id,
        }
        await axios(configRequest);
        this.getJobs();
    };
    //***** Fin Area de APIs *******/

    state = {
        idpais: 'Elija',
        idciudad: '',
        empresa: '',
        jobs: [],
        paises: [],
        ciudades: [],
        ciudadesfiltradas: [],
        empresas: [],
        listaItems: [],
        verMensaje: false
    }

    componentDidMount() {
        this.getCountries().then(() => {
            this.getCiudades().then(() => {
                this.getEmpresas().then(() => {
                    this.getJobs();
                })
            });
        });
    }

    render() {
        return (
            <>
                <section className="team1 cid-svshQR3Kzv" id="ListaItemsView">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <h3 className="align-center">
                                    <strong>Listado de Jobs</strong>
                                </h3>
                            </div>
                            {this.state.jobs.map((e) =>
                                <Item key={e.id} dataitem={e} 
                                dataPlaces={this.state.ciudades} 
                                dataCountries={this.state.paises} 
                                eliminar={this.deleteItem} />,
                            )
                            }
                        </div>
                    </div>
                </section>
            </>

        );
    }

}
