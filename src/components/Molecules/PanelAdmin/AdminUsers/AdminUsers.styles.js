import styled from 'styled-components';

export const StyledWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1100px;
  margin-left: 100px;
  margin-top: 40px;

  .container {
    width: 100%;
    display: flex;
    gap: 100px;
  }

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
        flex-basis: 60px;
      }

      .admin-action {
        margin-right: 20px;
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
      margin-left: 20px;
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
      width: 400px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;

    input {
      margin: 5px;
      padding: 10px 15px;
      border-radius: 10px;
      outline: none;
      border: 1px solid #4ccac7;
      font-size: 0.9rem;
    }

    button {
      margin-top: 20px;
      padding: 10px 15px;
      background-color: white;
      color: #f55153;
      border: 1px solid #f55153;
      border-radius: 10px;
      transition: 0.3s;
    }

    button:hover {
      background-color: #f55153;
      color: white;
      cursor: pointer;
    }
  }
`;
