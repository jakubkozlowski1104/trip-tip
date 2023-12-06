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
`;

export const StyledHeader = styled.h2`
  color: white;
`;
