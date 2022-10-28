import React from 'react';
import '../App.css';

const imagePath = {
  unLiked : "https://img.icons8.com/carbon-copy/100/000000/beer-bottle.png",
  liked : "https://img.icons8.com/plasticine/100/000000/beer-bottle.png"
}

class Like extends React.Component {
 state = {
  open : true
 }

toggleImage = () => {
  this.setState(state => ({open : !state.open}))
}

getImageName = () => this.state.open ? 'unLiked' : 'liked'


  render(){
    const imageName = this.getImageName();
    return (
      <div>
        <img src={imagePath[imageName]} alt={imagePath} onClick={this.toggleImage} />
      </div>
    )
  }
};

export default Like;