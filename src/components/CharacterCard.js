import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 75%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 2rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  padding: 2rem 0;
`;

export default function CharacterCard(props) {
  const { image, name, status, species, gender, location, origin, url } = props;
  return (
    <StyledCard>
      <img src={image}></img>
      <div className="characterDetails">
        <h3>Name: {name}</h3>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Location: {location}</p>
        <p>Origin: {origin}</p>
      </div>
    </StyledCard>
  );
}
