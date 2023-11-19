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
  height: 200vh;
  overflow: hidden;
  background-color: #f4f6f5;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  padding: 10px 50px 0 50px;

  .headers {
    margin-top: 50px;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;

    * {
      display: flex;
      align-items: center;
    }

    .category {
      color: black;
      flex-grow: 1;
      background-color: blueviolet;
      font-size: 1.4rem;
      font-weight: normal;
    }

    .sort-by {
      justify-content: flex-end;
      flex-grow: 1;
      background-color: red;
      color: #fe4f51;
    }
  }

  .cards {
    flex-grow: 25;
    height: 100px;
    width: 100%;
    background-color: green;
    display: flex;
    flex-wrap: wrap;

    .card {
      flex-basis: 33%;
    }
  }
`;
