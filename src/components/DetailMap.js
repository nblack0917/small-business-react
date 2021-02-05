import React, { Component } from 'react'
import Marker from './Marker'
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => (
//     <div style={{
//         color: 'white', 
//         background: 'blue',
//         padding: '15px 10px',
//         display: 'inline-flex',
//         textAlign: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: '100%',
//         transform: 'translate(-50%, -50%)'
//     }}>
//         {text}
//     </div>
// );
// const AnyReactComponent = ({ text }) => (
//     <div style={{
//         fontSize: 20,
//         textAlign: 'center',
//         justifyContent: 'center',
//         alignItems: 'center'
//     }}>
//         {text}
//         <Marker />
//     </div>
// );

class SimpleMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            business: props.business,
            center: {
                lat: props.business.lat,
                lng: props.business.long
            },
            zoom: 14
        }
    };

    render() {
        return (
        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
            >
            {/* <AnyReactComponent
                lat={this.state.business.lat}
                lng={this.state.business.long}
                text={this.state.business.name}
            /> */}
            <Marker  />
            </GoogleMapReact>
        </div>
        );
    }
    }

export default SimpleMap;