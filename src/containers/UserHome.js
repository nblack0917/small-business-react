import { connect } from 'react-redux'
import UserHome from '../components/UserHome'


const mapStateToProps = (state) => {
    return {
        business: state.business
    }
}


export default connect(mapStateToProps)(UserHome)