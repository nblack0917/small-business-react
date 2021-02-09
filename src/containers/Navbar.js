import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { disableLogin } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userName: state.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        disableLogin: () => dispatch(disableLogin())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)