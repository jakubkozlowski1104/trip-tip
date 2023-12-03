import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  overflow: hidden;
  height: 100px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #c4c4c2;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 100;
  transition: 0.3s;

  ${(props) =>
    props.$isScrolled &&
    `
      height: 60px;
  `}

  .logo {
    width: 10%;
    img {
      max-width: 100%;
      height: auto;
      padding: 10px;
      cursor: pointer;
    }
  }

  .search-bar {
    position: relative;
    flex-basis: 37.5%;
  }

  .icons {
    margin: 10px;
    font-size: 1.5rem;
    flex-basis: 5%;
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
    flex-basis: 20%;
    margin-right: auto;
    justify-self: flex-end;

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

export const StyledUl = styled.ul`
  position: relative;
  margin-left: 20px;
  flex-basis: 28.5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  transition: 1s;

  .link {
    font-weight: bold;
    padding: 9px;
    color: #b9c1c0;
    text-decoration: none;
    text-transform: uppercase;
    z-index: 1;
    display: inline-block;
    overflow: hidden;
    transition: 0.3s;
  }

  .link:nth-child(1) {
    ${(props) =>
      props.$selectedIndicator === '1' &&
      `
          color: black;
      `}
    width: 105px;
  }
  .link:nth-child(2) {
    ${(props) =>
      props.$selectedIndicator === '2' &&
      `
          color: black;
      `}
    width: 86px;
  }
  .link:nth-child(3) {
    ${(props) =>
      props.$selectedIndicator === '3' &&
      `
          color: black;
      `}
    width: 72px;
  }
  .link:nth-child(4) {
    ${(props) =>
      props.$selectedIndicator === '4' &&
      `
          color: black;
      `}
    width: 80px;
  }
`;

export const AnimatedLine = styled.div`
  transition: 0.5s;
  position: absolute;
  background-color: #fe5053;
  bottom: 0;
  left: 0;
  height: 3px;
  padding: 0;
  margin: 0;
  width: 100px;
  left: ${(props) => props.$animationData.left};
  width: ${(props) => props.$animationData.width};
`;
