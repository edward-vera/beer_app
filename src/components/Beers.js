import React, { Component } from 'react'
import Beer from './beer';
import "../App.css"

const imagePath = {
  unLiked : "https://img.icons8.com/carbon-copy/100/000000/beer-bottle.png",
  liked : "https://img.icons8.com/plasticine/100/000000/beer-bottle.png"
}

export default class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = {
        beers: [],
        open : true
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

    toggleImage = () => {
      this.setState(state => ({open : !state.open}))
    }

    getImageName = () => this.state.open ? 'unLiked' : 'liked'


  render() {
    const imageName = this.getImageName();
    return (
      <div>
        <h1 className='header'>Beer</h1>
        <ul className = "beers">
            {this.state.beers.map((beers) => {
              return( 
                <Beer beer={beers}/>
              );
            })}
            <img src={imagePath[imageName]} alt={imagePath} onClick={this.toggleImage} />
        </ul>
    </div>
    )
  }
}