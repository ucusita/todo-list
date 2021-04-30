import React from 'react'
import './../../styles/mbr-additional.css'

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
                                <a className="nav-link" href="index.html">Inicio <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#ListaItemAdd">Agregar Item</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#ListaItemsView">Ver Lista</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#ListaItemsView">Países</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Ciudades</a>
                            </li>
                        </ul>
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
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
            </>
        )

    }

}
