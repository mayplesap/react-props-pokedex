import pokedex from "./Pokedex";
import Pokecard from "./Pokecard";

function App() {
  return (
    <div className="container">
      <div className="App row">
        { pokedex.map(p => <Pokecard 
                          id={p.id} 
                          name={p.name} 
                          type={p.type} 
                          base_experience={p.base_experience}/>)}
      </div>
    </div>
  );
}

export default App;
