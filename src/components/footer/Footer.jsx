import React from 'react';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="container">            
            <p>&copy; {(new Date().getFullYear())} Actividad 2, Módulo React.</p>
        </footer>
 
    )
    
  }
 
}

export default Footer;