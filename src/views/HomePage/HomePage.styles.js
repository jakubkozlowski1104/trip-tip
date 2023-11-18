import styled from 'styled-components';

export const StyledHomeWrapper = styled.div`
  position: relative;
  left: 10%;
  width: 71%;
  padding: 0;
  margin: 0;
  font-weight: bold;
  color: #b9c1c0;
  text-decoration: none;
  text-transform: uppercase;
  height: 200vh;
  overflow: hidden;
  background-color: #f4f6f5;
  margin-top: 60px;
  display: flex;
  flex-direction: column;

  .info {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .category {
      height: 100px;
      width: 100px;
      background-color: blueviolet;
    }

    .sort-by {
      height: 100px;
      width: 100px;
      background-color: red;
    }
  }

  .cards {
    height: 100px;
    width: 100px;
    background-color: green;
  }
`;
