import React, { Component } from 'react'
import Beer from './beer';
import "../App.css"

export default class List extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <ul className = "beers">
            {this.props.data.map((beer) => {
              return <Beer beer={beer} />;
            })}
        </ul>
    </div>
    );
  }
}
