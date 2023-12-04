import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  margin-top: 120px;
  left: 20%;
  width: 600px;
  height: 700px;
  background-color: red;

  .admin-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 500px;
    background-color: blue;
  }
`;
