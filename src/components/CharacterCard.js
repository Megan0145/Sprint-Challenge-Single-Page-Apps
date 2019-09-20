import React from "react";

export default function CharacterCard(props) {
  const { key, image, name, status, species } = props;
  return (
    <div className='charactercard'>
      <img src={image}></img>
      <h3>{name}</h3>
      <p>{status}</p>
      <p>{species}</p>
    </div>
  );
}
