import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0;
  }
`;

export const StyledContainer = styled.div`
  padding: 10px;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 13%;
  right: 1%;
  width: 350px;
  height: 100px;
  z-index: 5000;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  p {
    color: black;
    padding-right: 10px;
  }

  .timeBar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-color: red;
    animation: ${fadeOut} 10s linear;
  }

  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid red;
    cursor: pointer;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
