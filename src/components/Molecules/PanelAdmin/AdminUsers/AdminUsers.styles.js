import styled from 'styled-components';

export const StyledWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  background-color: green;

  ul {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 2px;

    li {
      list-style: none;
      display: flex;
      background-color: white;

      .elem {
        flex-basis: 250px;
      }
      .email,
      .name {
        flex-grow: 1;
      }
      .is-admin,
      .idx {
        flex-basis: 40px;
      }
    }
  }
`;
