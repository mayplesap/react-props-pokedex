import Pokedex, {pokedex} from "./Pokedex";

function Pokegame() {
  const hand1 = [], hand2 = [];
  console.log("POKDEDX", pokedex);
  for(let i = 0; i < 4; i++) {
    hand1.push(pokedex[Math.floor(Math.random() * pokedex.length)]);
    hand2.push(pokedex[Math.floor(Math.random() * pokedex.length)]);
  }

  console.log("HAND1", hand1);
  console.log("HAND2", hand2);
  return (
    <div className="container">
      <div className="row">
        <Pokedex pokedexCards={hand1}/>
      </div>
      <div className="row">
        <Pokedex pokedexCards={hand2}/>
      </div>
    </div>
  )
}

export default Pokegame;
