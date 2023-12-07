import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 500px;
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 100px;
  gap: 10px;
  color: white;
  border-radius: 10px;

  input {
    padding: 10px 15px;
    border-radius: 10px;
    outline: none;
    border: 1px solid #4ccac7;
    font-size: 0.9rem;
  }

  .close {
    position: absolute;
    color: white;
    width: 20px;
    height: 20px;
    right: 0;
    top: 0;
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
  }
  .save {
    padding: 10px 20px;
    background-color: white;
    color: #f55153;
    border: 1px solid #f55153;
    border-radius: 10px;
    transition: 0.3s;
  }

  .save:hover {
    background-color: #f55153;
    color: white;
    cursor: pointer;
  }
`;

export const StyledHeader = styled.h2`
  color: white;
  padding: 5px;
`;
