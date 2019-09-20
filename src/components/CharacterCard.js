import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 75%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 2rem;
`;

export default function CharacterCard(props) {
  const { key, image, name, status, species } = props;
  return (
    <StyledCard>
      <img src={image}></img>
      <div className="characterDetails">
        <h3>Name: {name}</h3>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
      </div>
    </StyledCard>
  );
}
