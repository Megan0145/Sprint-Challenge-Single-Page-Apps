import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);
  const API = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(API)
      .then(response => {
        debugger
        setCharacterList(response.data.results);
      })
      .catch(error => {
       console.log(error)
      });
  }, []);

  return (
    <section className="character-list">
      {
        characterList.map(character => {
          
          return  <CharacterCard 
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
          />
        })
      }
    </section>
  );
}
