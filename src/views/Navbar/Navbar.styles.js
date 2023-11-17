import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid black;
  width: 100vw;

  .logo {
    width: 10%;
    img {
      max-width: 100%;
      height: auto;
      padding: 10px;
      cursor: pointer;
    }
  }

  ul {
    margin-left: 20px;
    flex-basis: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
  }

  .search-bar {
    position: relative;
    flex-basis: 46%;
    input {
      padding: 8px 60px 8px 35px;
      border-radius: 50px;
      outline: none;
      border: 1px solid gray;
    }
    .search-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 1.5%;
    }
  }

  .icons {
    margin: 10px;
    font-size: 1.5rem;
    color: gray;
    display: flex;
    justify-content: center;

    p {
      padding: 10px;
      cursor: pointer;
    }

    p:hover {
      color: #4ccac7;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    flex-grow: 2;
    margin-right: auto;

    button {
      border: 1px solid gray;
      border-radius: 50px;
      padding: 8px 25px;
      margin: 0px 8px;
      color: #4ccac7;
      background-color: white;
      border: 1px solid #4ccac7;
      cursor: pointer;
      transition: 0.2s;
    }
    button:hover {
      background-color: #dcf5f4;
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
