import React, { Component } from 'react';

export default class TableCell extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
        <td>{this.props.item}</td>   
    );
  }
}