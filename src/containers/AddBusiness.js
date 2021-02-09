import { connect } from 'react-redux'
import AddBusiness from '../components/AddBusiness'
import { addBusiness, fetchCoords, resetCoords } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        business: state.business,
        coords: state.coords
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business)),
        fetchCoords: (address) => dispatch(fetchCoords(address)),
        resetCoords: () => dispatch(resetCoords())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBusiness)
