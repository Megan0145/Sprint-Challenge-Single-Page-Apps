import React from "react";

export default function CharacterCard(props) {
  const { key, name, status, species } = props;
  return (
    <div className='charactercard'>
      <h3>{name}</h3>
      <p>{status}</p>
      <p>{species}</p>
    </div>
  );
}
