import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchValue, setSearchValue] = useState("");

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  const callSearchFunction = (e) => {
    e.preventDefault();
    
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
    </section>
  );
}
