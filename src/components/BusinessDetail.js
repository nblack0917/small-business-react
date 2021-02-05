import React from 'react'
import DetailMap from './DetailMap'
import { Container, Paper, Chip } from '@material-ui/core';


const BusinessDetail = (props) => {
    const id = props.match.params.id
    console.log(id, props.business)
    const busList = props.business.find(bus => bus.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
                <h2>{busList.name}</h2>
                <h3>{busList.address}</h3>
                <h3>{busList.hours}</h3>
                <p>{busList.description}</p>
                <DetailMap id={busList.id} business={busList}/>
        </Container>
        // <h1>Hello</h1>
    )
}

export default BusinessDetail
