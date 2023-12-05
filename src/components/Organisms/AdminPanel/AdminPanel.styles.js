import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: red;
  z-index: 10;

  .admin-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 500px;
    background-color: blue;
  }
`;
