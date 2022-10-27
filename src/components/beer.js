import '../App.css';

function Beer(props){
    return (
    <li className="beers">
        <img src={props.beer.image_url} alt={props.beer.name}/>
        <h4>{props.beer.name}</h4>
        <p>{props.beer.description}</p>
    </li>
    );
}
export default Beer;