import { connect } from 'react-redux'
import NavbarUser from '../components/NavnarUser'
import { disableLogin } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userName: state.userName[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        disableLogin: () => dispatch(disableLogin())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarUser)