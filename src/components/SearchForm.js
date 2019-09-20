import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [characterList, setCharacterList] = useState([]);
  const API = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    axios
      .get(API)
      .then(response => {
        setCharacterList(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, characterList);

  const [searchValue, setSearchValue] = useState("");
  const onInputChange = e => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = e => {
    e.preventDefault();
    setCharacterList(
      characterList.filter(character =>
        character.name.toUpperCase().includes(searchValue.toUpperCase())
      )
    );
  };

  return (
    <section className="search-form">
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
      <div>
        {characterList.map(character => {
          return (
            <CharacterCard
              name={character.name}
              status={character.status}
              species={character.species}
              image={character.image}
            />
          );
        })}
      </div>
    </section>
  );
}
