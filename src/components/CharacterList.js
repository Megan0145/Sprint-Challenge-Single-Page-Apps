import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const StyledCharacterList= styled.section`

  width: 85vw;
  min-height: 80vh;
  max-width: 1024px;
  margin: 35px auto;
  background: #fff;
  padding: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  display:flex;
  flex-direction: column;
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
      })
      .catch(error => {
       console.log(error)
      });
  }, []);

  return (
    <StyledCharacterList characterList={characterList}>
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
    </StyledCharacterList>
  );
}
