import React, { useState } from 'react'
import BusinessTableUser from './BusinessTableUser'

const UserHome = (props) => {
    // console.log(props.business)
        return (
            <BusinessTableUser busTable={props.business}/>
            )
}

export default UserHome
