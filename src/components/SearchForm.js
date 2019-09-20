import React, { useState } from "react";
import axios from 'axios';

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const searchAPI = 'https://rickandmortyapi.com/api/character/?name=';
  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  const callSearchFunction = (e) => {
    e.preventDefault();
    axios
      .get(searchAPI+searchValue)
      .then(response => {
        console.log(response)
        setSearchResult(searchResult.concat(response.data.results))
      })
      .catch(error => {
       console.log(error)
      });
  }

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
      {searchResult.map(result => {
        return <h1>{result.name}</h1>
      })}
      </div>
    </section>
    

   
  );
}
