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
  width: 380px;
  height: 400px;
  background-color: #232123;
  border-radius: 1%;
  color: #18c9ec;
  margin: 0;
  padding: 0;

  h1 {
    font-size: 1.4rem;
    margin: 0;
    padding: 10px 0;
  }

  .form-input {
    position: relative;
    width: 270px;
    margin: 10px;
    height: 40px;
    background-color: #343334;
    padding: 0;
    margin: 8px 0;
    border: ${(props) => props.isloginwrong && '1px solid red'};
    input {
      padding: 0px 0px 0px 8px;
      background-color: #343334;
      width: 85%;
      height: 100%;
      outline: none;
      border: none;
      background-color: #343334;
      color: white;
    }
    input:-webkit-autofill {
      transition: background-color 5000s;
      -webkit-text-fill-color: white;
    }

    .icon {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
      font-size: 0.9rem;
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
    font-weight: bold;
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

  .passwordInfo {
    width: 100%;
    display: flex;
    justify-content: space-between;
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