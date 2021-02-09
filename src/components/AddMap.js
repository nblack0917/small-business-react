//Component no longer in use

// import React, { Component } from 'react'
// import Marker from './Marker'
// import GoogleMapReact from 'google-map-react';

// class AddMap extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             center: {
//                 lat: 30.2672,
//                 lng: -97.7431
//             },
//             zoom: 14,
//             hasAddress: this.props.hasAddress
//         }
//     };

//     updateCenter() {
//         setTimeout(
//             this.setState({
//                 center: {
//                     lat: this.props.lat,
//                     lng: this.props.lng 
//                 }
//             }), 2000
//         )
//     }

//     render() {
//         // console.log(this.state)
//         // console.log(this.state.hasAddress)
//         if(!this.props.hasAddress) {
//             return (
//             <div style={{ height: '400px', width: '48%' }}>
//                 <GoogleMapReact
//                 bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
//                 center={this.state.center}
//                 zoom={this.state.zoom}
//                 >
//                 </GoogleMapReact>
//             </div>
//             );
//         } else {
//             console.log(this.state.hasAddress)
//             return (
//                 <div style={{ height: '400px', width: '48%' }}>
//                     <GoogleMapReact
//                     bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
//                     center={this.state.center}
//                     zoom={this.state.zoom}
//                     >
//                     <Marker  />
//                     </GoogleMapReact>
//                 </div>
//                 );
//         }
//     }
// }

// export default AddMap;