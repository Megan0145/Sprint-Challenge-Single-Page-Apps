import React from "react";
import styled from "styled-components";

const StyledWelcomePage = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  justify-content: space-between;
  h1 {
    font-size: 4rem;
    font-family: "Get Schwifty";
    color: mediumturquoise;
    text-shadow: 4px 4px 3px greenyellow;
    padding-top: 3rem;
  }
  img {
    width: 70vw;
    margin-bottom: 0;
  }
`;

export default function WelcomePage() {
  return (
    <StyledWelcomePage>
      <h1>Welcome to the ultimate fan site!</h1>
      <img className="main-img" src="Rick-and-Morty-Welcome.jpg" alt="rick" />
    </StyledWelcomePage>
  );
}
