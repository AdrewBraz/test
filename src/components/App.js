import  React, { Component } from 'react'
import Counter from '../helpers/Counter'
import FilterInput from './FilterInput'
import Table from './Table'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import { withRouter } from 'react-router-dom'


class App extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
      const url = this.props.location.pathname
      this.props.fetchData(url)
    }
    // componentWillReceiveProps(nextProps) {
    //   console.log(nextProps.App.filtered )
    // }

    render(){
      const { data, filtered } = this.props.allData
      const { filterData } = this.props
        return(
          <div className="container">
            <FilterInput filterData={ filterData } />
            { data.length > 0 ? <Table data={ data } filtered={ filtered } {...this.props} /> : null}
          </div>
        )
    }
}

function mapStateToProps(state){
    return{
        allData: state.allData
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( actions, dispatch )
}

App = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default App