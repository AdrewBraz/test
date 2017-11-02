import React, { Component } from 'react';
import TableCell from './TableCell'
import Counter from '../helpers/Counter';


export default class TableRow extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
        <tr>
          {this.props.row.map( item => {
            const key = Counter.increment();
            console.log(key)
            return <TableCell key={key} item={item} />
          })}
        </tr>   
    );
  }
}