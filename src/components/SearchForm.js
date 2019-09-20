import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const StyledBody = styled.div`
  background-color: black;
  width: 100vw;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSearchList = styled.section`
  background-color: black;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledForm = styled.form`
  padding: 2rem;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  input {
    width: 50vw;
    margin-right: 2rem;
    height: 2rem;
    text-align: center;
  }
  button {
    height: 2.6rem;
    width: 4rem;
    font-size: 1.5em;
    background-color: #ec36d2;
    border: none;
    color: white;
    border-radius: 30px;
    cursor: pointer;
  }
`;

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const searchAPI = "https://rickandmortyapi.com/api/character/?name=";
  const onInputChange = e => {
    setSearchValue(e.target.value);
  };
  const callSearchFunction = e => {
    e.preventDefault();
    axios
      .get(searchAPI + searchValue)
      .then(response => {
        console.log(response);
        setSearchResult(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
    setSearchValue("");
  };
  return (
    <StyledBody>
      <StyledForm>
        <input
          type="text"
          name="name"
          value={searchValue}
          id="nameinput"
          onChange={onInputChange}
          placeholder="Search Characters by Name"
        />
        <button onClick={callSearchFunction}>GO</button>
      </StyledForm>

      <StyledSearchList>
        {searchResult.map(result => {
          return (
            <CharacterCard
              name={result.name}
              status={result.status}
              species={result.species}
              image={result.image}
              gender={result.gender}
              location={result.location.name}
              origin={result.origin.name}
            />
          );
        })}
      </StyledSearchList>
    </StyledBody>
  );
}
