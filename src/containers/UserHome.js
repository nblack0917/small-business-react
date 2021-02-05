import { connect } from 'react-redux'
import UserHome from '../components/UserHome'
// import { fetchMakes, deleteMake } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        business: state.business
    }
}


export default connect(mapStateToProps)(UserHome)