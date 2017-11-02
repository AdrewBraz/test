import React, { Component } from 'react';

export default class TableHeader extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
        <th>{this.props.category}</th>   
    );
  }
}