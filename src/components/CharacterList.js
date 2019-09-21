import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const StyledCharacterList = styled.section`
  background-color: black;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledPagination = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 2rem;
  button {
    margin: 0 2rem;
    padding: 1rem;
    width: 5rem;
    background-color: black;
    color: white;
    border: 5px solid;
    border-image-source: linear-gradient(45deg, #006100, #f074cf);
    border-image-slice: 1;
  }
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);
  const [API, setAPI] = useState("https://rickandmortyapi.com/api/character/");
  const [nextAPI, setNextAPI] = useState("");
  const [prevAPI, setPrevAPI] = useState("");
  const nextPage = e => {
    setAPI(nextAPI);
    document.documentElement.scrollTop = 0;
  };
  const prevPage = e => {
    setAPI(prevAPI);
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    axios
      .get(API)
      .then(response => {
        setCharacterList(response.data.results);
        setNextAPI(response.data.info.next);
        setPrevAPI(response.data.info.prev);
      })
      .catch(error => {
        console.log(error);
      });
  }, [API]);

  return (
    <div>
      <StyledCharacterList>
        {characterList.map(character => {
          return (
            <CharacterCard
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
          );
        })}
      </StyledCharacterList>
      <StyledPagination>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </StyledPagination>
    </div>
  );
}
