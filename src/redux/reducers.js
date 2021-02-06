import { combineReducers } from 'redux'

// const business = (state = []) => state

const business = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const businessList = [ ...state ]
            businessList.splice(action.value, 1)
            return businessList
        default:
            return state
    }
}





export default combineReducers({ business })