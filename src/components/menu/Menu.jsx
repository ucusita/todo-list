import React from 'react'

import {
    Switch,
    Route,
    Link
} from "react-router-dom";

import './../../styles/mbr-additional.css'
import ListaItemView from '../../components/items/listaItemView';
import ListaItemAdd from '../../components/items/listaItemAdd';
import PaisesAdd from '../../components/paises/PaisesAdd';
import CiudadesAdd from '../../components/paises/CiudadesAdd';

export default class Menu extends React.Component {

    render() {

        return (
            <>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

                    <a className="navbar-brand" href="index.html">Mi Proyecto</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ListaItemAdd">Agregar item</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ListaItemView">Ver items</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Paises">Países</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Ciudades">Ciudades</Link>
                            </li>
                        </ul>
                    </div>

                </nav>

                <section className="header4 cid-sw588Kq0rk mbr-fullscreen" id="header4-2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="content-wrap">
                                <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1">
                                    <strong>MERN Stack</strong></h1>
                                <p className="mbr-fonts-style mbr-text mbr-white mb-3 display-7">
                                    Actividades de aplicación Módulo III</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Switch>
                    <Route exact path="/">
                        <Menu />
                    </Route>
                    <Route path="/ListaItemAdd">
                        <ListaItemAdd />
                    </Route>
                    <Route path="/ListaItemsView">
                        <ListaItemView />
                    </Route>
                    <Route path="/Paises">
                        <PaisesAdd />
                    </Route>
                    <Route path="/Ciudades">
                        <CiudadesAdd />
                    </Route>
                </Switch>

            </>
        )

    }

}
