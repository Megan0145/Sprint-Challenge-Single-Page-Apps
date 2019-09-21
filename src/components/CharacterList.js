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

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);
  const [API, setAPI] = useState("https://rickandmortyapi.com/api/character/");
  const [nextAPI, setNextAPI] = useState("");
  const [prevAPI, setPrevAPI] = useState("");
  const nextPage = e => {
    setAPI(nextAPI);
  };
  const prevPage = e => {
    setAPI(prevAPI);
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
      <div className="pagination">
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
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
    </div>
  );
}
