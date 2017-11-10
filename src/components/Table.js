import React, { Component } from 'react';
import Counter from '../helpers/Counter'
import TableHeader from './TableHeader'
import TableRow from './TableRow'


export default class Table extends Component {
  constructor(props){
    super(props)
  }

  handleClick(e){
    console.log(e)
  }

  render() {
    const { list } = this.props;
    const categories = Object.keys(list[0]);
    const rows = [];
    list.forEach(item => {
      const key = Counter.increment();
      const arr = Object.values(item);
      rows.push(<TableRow {...this.props} categories={ categories } id={item.id} key={key} row={arr}/>);
    })

    return( 
        <table>
          <thead>
            <tr>
              {categories.map(item => <TableHeader sortDepartments={this.props.sortDepartments} sortKey={item} key={item} category={item}/>)}
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
    );
  }
}