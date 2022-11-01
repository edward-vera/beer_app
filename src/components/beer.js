import React, {useState, useEffect} from "react";
import "../App.css"


export default function Beer(props){
  const [isToggled, setIsToggled] = useState(false)

useEffect(() =>{
    console.log(isToggled);
}, [isToggled]);

    return (
    <li className="beers">
        <img className="img" src={props.beer.image_url} alt={props.beer.name}/>
        <div>
        </div>
    <div className="beer">
        {!isToggled && <button onClick= {() => setIsToggled(!isToggled)}><img src="https://img.icons8.com/carbon-copy/100/000000/beer-bottle.png" alt = "unliked"/> </button>}
        {isToggled && <button onClick= {() => setIsToggled(!isToggled)}><img src="https://img.icons8.com/plasticine/100/000000/beer-bottle.png" alt = "liked"/> </button>}
        <h4>{props.beer.name}</h4>
        <p>{props.beer.tagline}</p>
        <p>First Brew Date : {props.beer.first_brewed}</p>
        <p>Info {props.beer.description}</p>
    </div>

    </li>
    );
}