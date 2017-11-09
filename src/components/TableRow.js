import React, { Component } from 'react';
import TableCell from './TableCell'
import Counter from '../helpers/Counter';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import { withRouter } from 'react-router-dom'


export default class TableRow extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { row, categories } = this.props;
    return (
        <tr>
          {row.map( (item, i) => {
            const key = Counter.increment();
            return <TableCell {...this.props} category={ categories[i] } key={key} item={item} />
          })}
        </tr>   
    );
  }
}

