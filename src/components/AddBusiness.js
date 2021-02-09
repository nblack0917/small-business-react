import React, { useState } from 'react'
import { Container, TextField, Button } from '@material-ui/core';
import AddMap from '../containers/AddMap'
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';
import { useHistory } from 'react-router-dom'


const AddBusiness = (props) => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [hours, setHours] = useState("");
    const [description, setDescription] = useState("");
    const [hasAddress, setHasAddress] = useState(false);

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
        console.log("getAddress", address)
        props.fetchCoords(address)
        setHasAddress(true)
    }
    const updateView = () => {
        console.log(props.coords.lat, props.coords.lng)
        console.log("click")
        setHasAddress(false)
        
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
        setHasAddress(false)
        props.resetCoords();
        history.push('/')
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
            <AddMap lat={props.coords.lat} lng={props.coords.lng} hasAddress={hasAddress} />
        </div>
    )
    
}

export default AddBusiness
