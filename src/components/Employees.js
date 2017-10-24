import  React, { Component } from 'react'
import Counter from '../helpers/Counter';
import axios from 'axios'


export default class Employees extends Component{
    constructor(props){
        super(props)
    }

    renderItems(obj){
        const counter = Counter.increment();
        return(
            <tr>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.lastName}</td>
            </tr>
        )
    }

    renderHeader(obj){
        const arr = Object.keys(obj);
        arr.map(item => <th>{item}</th>)
    }

    render(){
        return(
            <div className="container">
              <table className="table">
                  <tbody>
                      {this.props.employees.list}
                      {this.props.employees.list.map( item => {
                         return this.renderItems(item)
                      })}
                  </tbody>
              </table>
            </div>    
        )
    }
}