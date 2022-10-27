import List from './components/Beers';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: []
    }
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
      <div className="App">
      <List data={this.state.beers}/>
    </div>
    )};
}



export default App;
