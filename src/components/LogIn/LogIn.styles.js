import styled from 'styled-components';

export const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
  background-color: #232123;
  border-radius: 1%;
  color: #18c9ec;
  margin: 0;
  padding: 0;

  h1 {
    margin: 0;
    padding: 10px 0;
  }

  .form-input {
    input {
      padding: 10px 10px;
      width: 250px;
      height: 20px;
      border-radius: 3px;
      outline: none;
      border: none;
      margin: 8px 0;
      background-color: #343334;
      border: ${(props) => props.isloginwrong && '1px solid red'};
      color: white;
    }
    input:-webkit-autofill {
      transition: background-color 5000s;
      -webkit-text-fill-color: white;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  button {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    padding: 10px 10px;
    width: 270px;
    height: 40px;
    border-radius: 2px;
    outline: none;
    border: none;
    margin: 5px 0;
    background-color: #03b8e9;
    font-size: 1.1rem;
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .error {
      display: flex;
      align-items: center;
      .error-icon {
        margin-right: 5px;
        color: red;
      }
      p {
        color: red;
        font-size: 0.75rem;
        margin: 2px 0px;
      }
    }
    .forgot {
      margin: 5px 0;
      color: #18c9ec;
      font-size: 0.75rem;
      cursor: pointer;
    }
  }

  .register p {
    margin: 0;
    font-size: 0.85rem;
    padding-bottom: 25px;

    span {
      font-weight: bold;
      cursor: pointer;
      transition: 0.2s;
    }

    span:hover {
      color: #5fd1e8;
    }
  }
`;
