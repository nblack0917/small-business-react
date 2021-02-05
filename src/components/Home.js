import React, { useState } from 'react'
import BusinessTable from './BusinessTable'


const Home = (props) => {
    // console.log(props.business)
        return (
            <BusinessTable busTable={props.business}/>
        )
}

export default Home
