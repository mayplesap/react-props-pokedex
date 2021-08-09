import "./Pokecard.css";

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

function Pokecard(props) {
  return (
   <div className="Pokecard">
    <h3 className="Pokecard-name">{props.name}</h3>
    <img src={`${BASE_URL}${props.id}.png`} className="Pokecard" alt={props.name}/>
    <p>Type: {props.type}</p>
    <p>EXP: {props.base_experience}</p>
   </div>
 ); 
}

export default Pokecard;
