import { connect } from 'react-redux'
import UserHome from '../components/UserHome'
import { deleteBusiness } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        business: state.business
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBusiness: (index) => dispatch(deleteBusiness(index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserHome)