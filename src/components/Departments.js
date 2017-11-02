import  React, { Component } from 'react'
import axios from 'axios'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import Counter from '../helpers/Counter';
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
        if(this.props.departments.list.length > 0){
            const { list } = this.props.departments;
            const categories = Object.keys(list[0]);
            const rows = [];
            list.forEach(item => {
                const key = Counter.increment();
                console.log(key)
                const arr = Object.values(item);
                rows.push(<TableRow key={key} row={arr}/>);
            })

            return(
                <div className="container">
                  <table className="table">
                      <thead>
                          <tr>
                              {categories.map(item => {
                                   return <TableHeader key={item} category={item} />
                                })}
                          </tr>    
                      </thead>
                      <tbody>
                          { rows }
                      </tbody>
                  </table>
                </div>    
            )
        } return (
            <div>
                empty
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