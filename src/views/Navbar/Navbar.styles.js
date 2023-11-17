import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  height: 50px;
  display: flex;
  border-bottom: 2px solid black;

  .logo {
    width: 8%;
    img {
      max-width: 100%; /* Ustala maksymalną szerokość obrazka na 100% szerokości jego kontenera */
      height: auto; /* Automatycznie dopasowuje wysokość obrazka zachowując proporcje */
      padding: 5px;
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;

    li {
      padding: 5px;
      background-color: yellow;
      text-decoration: none;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
