import  React, { Component } from 'react'
import axios from 'axios'


export default class Employees extends Component{
    constructor(props){
        super(props)
    }

    renderItems(obj){
        for(let key in obj){
            return (
                <tr>{obj[key]}</tr>
            )
        }
    }

    render(){
        return(
            <div className="container">
              <table className="table">
                  <tbody>
                      {this.props.employees.list.map( item => {
                         return this.renderItems(item)
                      })}
                  </tbody>
              </table>
            </div>    
        )
    }
}