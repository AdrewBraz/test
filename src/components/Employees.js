import  React, { Component } from 'react'
import Counter from '../helpers/Counter';
import TableHeader from './TableHeader'
import TableRow from './TableRow'
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
        if(this.props.employees.list.length > 0){
            const { list } = this.props.employees;
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
        employees: state.employees
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( actions, dispatch )
}

Employees = withRouter(connect(mapStateToProps, mapDispatchToProps)(Employees))

export default Employees