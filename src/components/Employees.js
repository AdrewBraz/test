import  React, { Component } from 'react'
import Counter from '../helpers/Counter'
import Table from './Table'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import { withRouter } from 'react-router-dom'


class Employees extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchEmployees()
    }

    render(){
        const { list } = this.props.employees
        return(
            <div className="container">
              { list.length > 0 ? <Table list={list} {...this.props} /> : null}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        employees: state.employees
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( actions, dispatch )
}

Employees = withRouter(connect(mapStateToProps, mapDispatchToProps)(Employees))

export default Employees