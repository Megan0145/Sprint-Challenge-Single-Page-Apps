import React from "react";
import styled from "styled-components";

const StyledWelcomePage = styled.div`
  width: 100vw;
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    font-family: "Luckiest Guy", cursive;
    padding-top: 3rem;
  }
  img {
    width: 80vw;
    margin-top: 30vh;
  }
`;

export default function WelcomePage() {
  return (
    <StyledWelcomePage>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img className="main-img" src="Rick-and-Morty-Welcome.jpg" alt="rick" />
      </header>
    </StyledWelcomePage>
  );
}
