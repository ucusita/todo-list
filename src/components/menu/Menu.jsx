import React from 'react'
import { Link } from "react-router-dom";
import './../../styles/mbr-additional.css'


export default class Menu extends React.Component {

    render() {

        return (
            <>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                    <a className="navbar-brand" href="index.html">Mi Proyecto</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/"> Inicio </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ListaItemAdd"> Agregar item </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ListaItemView"> Ver items </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Countries"> Países </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Cities"> Ciudades </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Empresas"> Empresas </Link>
                            </li>
                        </ul>
                    </div>

                </nav>                
            </>
        )

    }

}
