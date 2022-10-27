function Beer(props){
    return (
    <li className="beers">
        <img className="img" src={props.beer.image_url} alt={props.beer.name}/>
    <div className="beer">
        <h4>{props.beer.name}</h4>
        <p>{props.beer.tagline}</p>
        <p>First Brew Date : {props.beer.first_brewed}</p>
        <p>Info {props.beer.description}</p>
    </div>

    </li>
    );
}
export default Beer;