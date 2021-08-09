// import './App.css';
import pokedex from "./Pokedex";
import Pokecard from "./Pokecard";

function App() {
  return (
    <div>
      <ul className="App">
        {pokedex.map(p => <Pokecard 
                          id={p.id} 
                          name={p.name} 
                          type={p.type} 
                          base_experience={p.base_experience}/>)}
      </ul>
    </div>
  );
}

export default App;
