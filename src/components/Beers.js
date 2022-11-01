import React, { Component } from 'react'
import Beer from './beer';
import "../App.css"

export default class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = {
        beers: [],
    };
  }
  
  componentDidMount(){
    console.log("Mounted");
    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json())
    .then(data => {
        this.setState({
            beers: [...data],
        });
    });
  }

  render() {
    return (
      <div>
        <h1 className='header'>Beer</h1>
        <ul className = "beers">
            {this.state.beers.map((beers) => {
              return( 
                <Beer beer={beers}/>
              );
            })}
        </ul>
    </div>
    )
  }
}