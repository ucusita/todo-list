import React from 'react'

export default class City extends React.Component {

    eliminarCall = (e) =>{
        console.log("Eliminar ", this.props.data.id);
        this.props.eliminar(this.props.data.id)
    }

    render() {
        return (
            <div className="col-sm-6 col-lg-4" key={this.props.data.id}>
                <div className="card-wrap">
                    <div className="content-wrap">
                        <h5 className="mbr-section-title card-title mbr-fonts-style align-center m-0">
                            <strong>{this.props.data.name}</strong>
                        </h5>
                        <p className="card-text mbr-fonts-style align-center">
                            {this.props.data.id}
                        </p>
                        <button onClick={this.eliminarCall.bind(this.props.data.id)} className="btn btn-outline-danger btn-block display-4">Eliminar esta ciudad</button>
                    </div>
                </div>
            </div>

        )

    }
}

