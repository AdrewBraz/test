import  React, { Component } from 'react'

export default class Home extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="container">
                <h1>Example heading <span className="badge badge-default">New</span></h1>
            </div>    
        )
    }
}