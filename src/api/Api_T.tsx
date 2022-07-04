import React, { useEffect, useState } from "react";
import { Iconos_P } from "./iconos_P";

export const Api_T = () => {
  const [Pokemones, setPokemon] = useState<any>([]);
  const [LLamar_AP, setLLamar_AP] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const LLamar_Api = async () => {
    const data = await fetch(LLamar_AP);
    const dataPK = await data.json();

    setLLamar_AP(dataPK.next);

    function Crear_objetosPokemon(result: []) {
      result.forEach(async (pokemon: any) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const datas = await res.json();


        setPokemon((currentList: any) => [...currentList, datas]);

        await console.log(datas);

        

        
      });
    }
    Crear_objetosPokemon(dataPK.results);
  };

  useEffect(() => {
    LLamar_Api();
  },[]);

  Pokemones.sort((a: any, b: any) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));

  return (
    <div className="app-container">
      <h1>Pokemones</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {Pokemones.map((pokemon: any, index: number) => (
            // eslint-disable-next-line react/jsx-pascal-case
            <Iconos_P
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
            ></Iconos_P>
          ))}
        </div>
        <button className="load-more">Boton</button>
      </div>
    </div>
  );
};
