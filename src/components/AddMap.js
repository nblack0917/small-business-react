import React, { Component } from 'react'
import Marker from './Marker'
import GoogleMapReact from 'google-map-react';

class DetailMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            business: props.business,
            center: {
                lat: 30.2672,
                lng: -97.7431
            },
            zoom: 14
        }
    };

    render() {
        return (
        <div style={{ height: '400px', width: '48%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
            >
            <Marker  />
            </GoogleMapReact>
        </div>
        );
    }
    }

export default DetailMap;