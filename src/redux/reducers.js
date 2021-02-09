import { combineReducers } from 'redux'


const business = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            // console.log(action.value)
            const businessList = [ ...state ]
            businessList.splice(action.value, 1)
            return businessList
        default:
            return state
    }
}

const userName = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_USERNAME':
            const newName = action.value;
            return newName
        default:
            return state
    }
}

const loggedIn = (state = false, action) => {
    switch(action.type) {
        case 'ENABLE_LOGIN':
            const trueState = action.value;
            return trueState;
        case 'DISABLE_LOGIN':
            const falseState = action.value;
            return falseState;
        default:
            return state
    }
}

const coords = (state = { lat: null, lng: null }, action) => {
    switch(action.type) {
        case 'FETCH_COORDS':
            // console.log(action.value)
            const newCoords = {
                lat: action.value.lat,
                lng: action.value.lng
            }
            return newCoords;
        case 'RESET_COORDS':
            const defaultCoords = {
                lat: 30.2672,
                lng: -97.7431
            }
        default:
            return state;

    }
}

export default combineReducers({ business, loggedIn, userName, coords })