export const addBusiness = (business) => {
    return {
        type: 'ADD_BUSINESS',
        value: business
    }
}

export const deleteBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}

export const enableLogin = () => {
    return {
        type: 'ENABLE_LOGIN',
        value: true
    }
}

export const disableLogin = () => {
    return {
        type: 'DISABLE_LOGIN',
        value: false
    }
}

export const updateUserName = (userName) => {
    return {
        type: "UPDATE_USERNAME",
        value: userName
    }
}

export const fetchCoords = (address) => {
    return (dispatch) => {
        fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_API_KEY}&location=${address}
        `)
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_COORDS',
                    value: response.results[0].locations[0].latLng
                }
                dispatch(action)
            })
    }
}

export const resetCoords = () => {
    return {
        type: 'RESET_COORDS'
    }
}