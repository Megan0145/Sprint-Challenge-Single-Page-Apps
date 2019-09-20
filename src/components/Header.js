import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const StyledNav = styled.header`
  display: flex;
  justify-content: center;
  height: 10vh;
  align-items: center;
  a {
    margin: 0 2rem;
    text-decoration: none;
    color: gray;
    &.active{
      color: #ec36cf;
    }
  }
`;

export default function Header() {
  return (
    <StyledNav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/search">Search</NavLink>
    </StyledNav>
  );
}
