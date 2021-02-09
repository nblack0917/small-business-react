import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';
import { useHistory } from 'react-router-dom'
import Marker from './Marker'
import GoogleMapReact from 'google-map-react';


const AddBusiness = (props) => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [hours, setHours] = useState("");
    const [description, setDescription] = useState("");
    // const [hasAddress, setHasAddress] = useState(false);
    const [center, setCenter] = useState({
        lat: 30.2672,
        lng: -97.7431
    });

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }

    const handleHoursChange = (e) => {
        setHours(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const updateMap = () => {
        if (address) {
            // console.log("getAddress", address)
            props.fetchCoords(address)
            // setHasAddress(true)
            setTimeout(setCenter({
                lat: props.coords.lat,
                lng: props.coords.lng
            }), 1000)
        }
    }
    const updateView = () => {
        console.log(props.coords.lat, props.coords.lng)
        console.log("click")
        setCenter({
            lat: props.coords.lat,
            lng: props.coords.lng
        })
        // setHasAddress(false)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const lastID = parseInt(props.business[props.business.length - 1].id);
        const newBusiness = {
            id: lastID + 1,
            name,
            address,
            hours,
            description,
            lat: props.coords.lat,
            long: props.coords.lng
        }
        console.log("New Business: ", newBusiness)
        props.addBusiness(newBusiness);
        // setHasAddress(false)
        props.resetCoords();
        history.push('/home')
    }

    return (
        <div className="add-container">
            <form className="add-form" onSubmit={handleSubmit} >
                <TextField
                    required
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    name="name"
                    label="Name"
                    type="text" />
                <TextField
                    required
                    id="address"
                    value={address}
                    onChange={handleAddressChange}
                    onBlur={updateMap}
                    name="address"
                    label="Address"
                    type="text" />
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={updateView}>
                        <PinDropOutlinedIcon fontSize="large"  color="primary" /> <h3 style={{ color: '#3949AB'}}>Map Locaiton</h3>
                    </div>
                <TextField
                    id="hours"
                    value={hours}
                    onChange={handleHoursChange}
                    name="hours"
                    label="Hours (ex. 8AM - 9PM)"
                    type="text" />
                <TextField
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    name="description"
                    label="Description"
                    type="text" />
                <Button variant="contained" color="primary" style={{width: "50%", marginTop: 15}} type="submit">Save</Button>
            </form>
            {/* <AddMap lat={props.coords.lat} lng={props.coords.lng} hasAddress={hasAddress} /> */}
            <div style={{ height: '400px', width: '48%' }}>
            <div style={{ height: '400px', width: '48%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                    center={center}
                    zoom={14}
                    >
                    <Marker  />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
    
}

export default AddBusiness
