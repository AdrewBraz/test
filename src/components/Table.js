import React, { Component } from 'react';
import Counter from '../helpers/Counter'
import TableHeader from './TableHeader'
import TableRow from './TableRow'


export default class Table extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: this.props.filtered || []
    }
  }

  componentWillReceiveProps(nextProps) {
        this.setState({ list: nextProps.filtered })
    }

  renderTable(){
    const { list } = this.state;
    const categories = Object.keys(list[0]);
    const rows = [];
    list.forEach(item => {
    const key = Counter.increment();
    const arr = Object.values(item);
    rows.push(<TableRow {...this.props} categories={ categories } id={item.id} key={key} row={arr}/>);
    })
    return( 
        <table className="table table-bordered table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              {categories.map(item => <TableHeader sortData={this.props.sortData} sortKey={item} key={item} category={item}/>)}
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
    );

  }

  render() {
    const { list } = this.state;

    return( 
        <div>
          { list.length ? this.renderTable() : null}
        </div>
    );
  }
}