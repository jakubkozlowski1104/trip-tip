import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  input {
    padding: 8px 200px 8px 35px;
    border-radius: 50px;
    outline: none;
    border: 1px solid gray;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    color: black;
  }
`;
