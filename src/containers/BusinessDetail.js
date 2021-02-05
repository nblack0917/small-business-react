import { connect } from 'react-redux'
import BusinessDetail from '../components/BusinessDetail'
// import { fetchMakes, deleteMake } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        business: state.business
    }
}




export default connect(mapStateToProps)(BusinessDetail)