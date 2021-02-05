import React, { useState } from 'react'
import { Container, TextField, Button } from '@material-ui/core';
import AddMap from './AddMap'


const AddBusiness = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [hours, setHours] = useState("");
    const [description, setDescription] = useState("");

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

    return (
        <div
            // maxWidth='lg'
            // style={{ dislplay: 'flex', justifyContent: 'space-between', marginTop: 40}}
            className="add-container"
        >
            <form className="add-form"
                // onSubmit={}
            >
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
                    name="address"
                    label="Address"
                    type="text" />
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
            <AddMap />
        </div>
    )
}

export default AddBusiness
