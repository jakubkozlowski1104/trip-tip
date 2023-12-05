import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  position: relative;
  margin-top: 120px;
  left: 20%;

  ul {
    display: flex;
    list-style: none;
    gap: 20px;

    li {
      text-decoration: none;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  padding: 5px;
  color: #b9c1c0;
  text-decoration: none;
  text-transform: uppercase;
`;
