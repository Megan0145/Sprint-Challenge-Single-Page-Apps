import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  box-shadow: 15px 15px 30px green, -15px -15px 30px green;
  padding: 2rem 0;
  background-color: white;
  border-radius: 10px;
  margin-top: 4rem;
  min-height: 575px;
  max-width: 301px;
  img {
    border-radius: 10px;
    width: 80%;
  }
  .characterDetails {
    width: 80%;
    text-align: center;
    font-family: "Roboto", sans-serif;
  }
  h3 {
    font-family: "Turret Road";
    font-size: 1.8rem;
  }
  span {
    font-weight: bold;
  }
`;

export default function CharacterCard(props) {
  const { image, name, status, species, gender, location, origin, url } = props;
  return (
    <StyledCard>
      <img src={image}></img>
      <div className="characterDetails">
        <h3>{name}</h3>
        <p>
          <span>Status: </span>
          {status}
        </p>
        <p>
          <span>Species: </span>
          {species}
        </p>
        <p>
          <span>Gender: </span>
          {gender}
        </p>
        <p>
          <span>Location: </span>
          {location}
        </p>
        <p>
          <span>Origin: </span>
          {origin}
        </p>
      </div>
    </StyledCard>
  );
}
