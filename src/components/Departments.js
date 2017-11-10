import  React, { Component } from 'react'
import axios from 'axios'
import Table from './Table'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import { withRouter } from 'react-router-dom'

class Departments extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchDepartments()
    }

    render(){
        const { list } = this.props.departments
        return(
            <div className="container">
                { list.length > 0 ? <Table {...this.props} list={list} /> : null}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        departments: state.departments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( actions, dispatch )
}

Departments = withRouter(connect(mapStateToProps, mapDispatchToProps)(Departments))

export default Departments