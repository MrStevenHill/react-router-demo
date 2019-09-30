import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 650px;
    display: flex;
    justify-content: space-between;
  }
`;

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/stuff">Stuff</Link>
      </li>
      <li>
        <Link to="/things">Things</Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
