import React from 'react'

export default class Item extends React.Component {

    eliminarCall = (e) =>{
        console.log("Eliminar ", this.props.data.id);
        this.props.eliminar(this.props.data.id)
    }

    render() {
        //console.log(this.props.data.id);
        return (
            <div className="col-sm-6 col-lg-4" key={this.props.data.id}>
                <div className="card-wrap">
                    <div className="content-wrap">
                        <h5 className="mbr-section-title card-title mbr-fonts-style align-center m-0">
                            <strong>{this.props.data.puesto}</strong>
                        </h5>
                        <h6 className="mbr-role mbr-fonts-style align-center mb-3 ">
                            <strong>{this.props.data.empresa}</strong>
                        </h6>
                        <p className="card-text mbr-fonts-style align-center">
                            {this.props.data.ciudad}
                        </p>
                        <p className="card-text mbr-fonts-style align-center">
                            {this.props.data.pais}
                        </p>
                        <button onClick={this.eliminarCall.bind(this.props.data)} className="btn btn-outline-danger btn-block display-4">Eliminar este ítem</button>
                    </div>
                </div>
            </div>

        )

    }
}

