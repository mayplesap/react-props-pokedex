import "./Pokecard.css";

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

/** Pokecard
 * Creates a display for a single pokemon card. 
 * @params props --- pokemon object {id, name, type, base_experience}
 */
function Pokecard(props) {

  return (
   <div className="Pokecard col-3">
    <h3 className="Pokecard-name">{props.name}</h3>
    <img src={`${BASE_URL}${props.id}.png`} className="Pokecard-img" alt={props.name}/>
    <p>Type: {props.type}</p>
    <p>EXP: {props.base_experience}</p>
   </div>
 );  
}

export default Pokecard;
