import React, { useState } from 'react'
import BusinessTableUser from './BusinessTableUser'
// import UserHome from '../containers/UserHome'

const UserHome = (props) => {
    // console.log(props.business)
        return (
            <BusinessTableUser busTable={props.business} deleteBusiness={props.deleteBusiness} />
            )
}

export default UserHome
