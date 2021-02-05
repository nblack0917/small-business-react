import { connect } from 'react-redux'
import Home from '../components/Home'
// import { fetchMakes, deleteMake } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        business: state.business
    }
}


export default connect(mapStateToProps)(Home)