import styled from 'styled-components';

export const StyledWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;

  ul {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 2px;

    li {
      list-style: none;
      display: flex;

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

    .btn {
      cursor: pointer;
    }

    .btn.delete {
      i {
        color: red;
      }
    }

    .btn.edit {
      margin-right: 10px;
      padding-bottom: 3px;
      i {
        color: orange;
      }
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Przezroczyste szare tło */
    z-index: 40; /* Ustaw odpowiednie z-index, aby overlay był nad resztą treści */
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-container {
      position: absolute;
      background-color: black;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      justify-content: center;
      align-items: center;
    }
  }
`;
