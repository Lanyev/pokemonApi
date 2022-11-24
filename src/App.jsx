import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numero, setNumero] = useState(1);
  const [pokemon, setPokemon] = useState([]);
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleRandom = () => {
    setNumero(randomNum(1, 151));
  };

  const getPokemon = async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${numero}`;
    const response = await axios.get(URL);
    setPokemon(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getPokemon();
  }, [numero]);

  const objPokemon = {
    nombre: pokemon.name,
    id: pokemon.id,
    tipo: pokemon.types,
    stats: pokemon.stats,
  };
  console.log(objPokemon);

  const { nombre, id, tipo, stats } = objPokemon;

  return (
    <div className="App">
      <div className="container">
        <img
          className="imagePokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${numero}.png`}
          alt=""
        />
        <p>Normal</p>
        <img
          className="imagePokemonShiny"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${numero}.png`}
          alt=""
        />
        <p>Shiny</p>
        <div className="details">
          <h1 className="name">{nombre}</h1>
          <p className="idis">ID#{id}</p>

          <p>
            HP: {stats[0]?.base_stat} <br />
            Attack: {stats[1]?.base_stat} <br />
            Defense: {stats[2]?.base_stat} <br />
            Special Attack: {stats[3]?.base_stat} <br />
            Special Defense: {stats[4]?.base_stat} <br />
            Speed: {stats[5]?.base_stat} <br />
          </p>

          <p className="tipes">
            Tipo: {tipo?.map((tipo) => tipo.type.name).join(", ")}
          </p>
        </div>
        <button onClick={handleRandom} className="button1">
          Random
        </button>
      </div>
    </div>
  );
}

export default App;
