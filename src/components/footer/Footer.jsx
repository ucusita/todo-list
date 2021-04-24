import React from 'react';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="container">
            <p className="float-right"><a href="index.html">Subir</a></p>
            <p>&copy; {(new Date().getFullYear())} Actividad 1, Módulo React.</p>
        </footer>
 
    )
    
  }
 
}

export default Footer;