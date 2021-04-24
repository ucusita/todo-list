import React from 'react'

class Item extends React.Component {

    render() {
        return (
            <div className="col-sm-6 col-lg-4" key={this.props.elemento.id}>
                <div className="card-wrap">
                    <div className="content-wrap">
                        <h5 className="mbr-section-title card-title mbr-fonts-style align-center m-0 display-5">
                            <strong>{this.props.elemento.puesto}</strong>
                        </h5>
                        <h6 className="mbr-role mbr-fonts-style align-center mb-3 display-4">
                            <strong>{this.props.elemento.empresa}</strong>
                        </h6>
                        <p className="card-text mbr-fonts-style align-center display-7">
                            {this.props.elemento.ciudad}
                        </p>
                        <p className="card-text mbr-fonts-style align-center display-7">
                            {this.props.pais}
                        </p>
                        <button onClick={()=>{ this.eliminarItem(this.props.elemento.id) } } className="btn btn-outline-danger btn-block display-4">Eliminar este ítem</button>
                    </div>
                </div>
            </div>

        )

    }
}

export default Item;