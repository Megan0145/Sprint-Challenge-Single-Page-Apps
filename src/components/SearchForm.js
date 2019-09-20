import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const StyledSearchList = styled.section`
  width: 85vw;
  min-height: 80vh;
  max-width: 1024px;
  margin: 35px auto;
  background: #fff;
  padding: 15px;
  display:flex;
  flex-direction: column;
  align-items: center;
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
      setSearchValue('');
  };
  return (
    <div>
      <form>
        <label htmlFor="name">Search by name: </label>
        <input
          type="text"
          name="name"
          value={searchValue}
          id="nameinput"
          onChange={onInputChange}
        />
        <button onClick={callSearchFunction}>Search</button>
      </form>
     
      <StyledSearchList>
        {searchResult.map(result => {
          return <CharacterCard 
          name={result.name}
          status={result.status}
          species={result.species}
          image={result.image}
          gender={result.gender}
          location={result.location.name}
          origin={result.origin.name}
          />;
        })}
      </StyledSearchList>
    </div>
  );
}
