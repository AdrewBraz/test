import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Main from './Main'
import { withRouter } from 'react-router-dom'


function mapStateToProps(state){
    return{
        departments: state.departments,
        employees: state.employees
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( actions, dispatch )
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App
