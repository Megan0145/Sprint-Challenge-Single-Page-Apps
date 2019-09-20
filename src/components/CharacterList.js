import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const StyledCharacterList= styled.section`
  background-color: black;
  width: 100vw; 
  display:flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  align-items: center;
`;


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
        setCharacterList(response.data.results);
        console.log(response.data)
      })
      .catch(error => {
       console.log(error)
      });
  }, []);

  return (
    <StyledCharacterList>
      {
        characterList.map(character => {
          
          return  <CharacterCard 
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
            gender={character.gender}
            location={character.location.name}
            origin={character.origin.name}
            url={character.url}
          />
        })
      }
    </StyledCharacterList>
  );
}
