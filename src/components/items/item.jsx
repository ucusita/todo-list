import React from 'react'

export default class Item extends React.Component {

    state = {
        placeCity : '',
        placeCountry: ''
    }

    componentDidMount () {
        this.filtraLugar();
    }

    filtraLugar = () => {
        let ciudad= this.props.dataPlaces.filter(place => place.id.toString() === this.props.dataitem.organization.placeId)
        this.setState({placeCity : ciudad[0].name});
        let idpais = ciudad[0].countrieId;
        let pais= this.props.dataCountries.filter(place => Number(place.id) === Number(idpais));
        this.setState({placeCountry : pais[0].name});
    }

    eliminarCall = (e) => {
        this.props.eliminar(this.props.dataitem.id)
    }

    render() {        
        return (
            <div className="col-sm-6 col-lg-4" key={this.props.dataitem.id}>
                <div className="card-wrap">
                    <div className="content-wrap">
                        <h5 className="mbr-section-title card-title mbr-fonts-style align-center m-0">
                            <strong>{this.props.dataitem.position}</strong>
                        </h5>
                        <p className="mbr-section-title card-title mbr-fonts-style align-center m-0">
                            {this.props.dataitem.description}
                        </p>
                        <p className="card-text mbr-fonts-style align-center">
                            {this.props.dataitem.organization.name}
                        </p>
                        <h6 className="mbr-role mbr-fonts-style align-center mb-3 ">
                            Ciudad:<strong>{this.state.placeCity}</strong>
                        </h6>
                        <p className="mbr-role mbr-fonts-style align-center mb-3 ">
                            ({this.state.placeCity})
                        </p>
                        <button onClick={this.eliminarCall.bind(this.props.data)} className="btn btn-outline-danger btn-block display-4">Eliminar este ítem</button>
                    </div>
                </div>
            </div>

        )

    }
}

