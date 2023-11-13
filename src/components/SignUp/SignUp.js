/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import {
  StyledLogin,
  StyledCenter,
  StyledForm,
  DataExistError,
  HoverInfo,
  InputName,
} from '../SignUp/SignUp.styles';
import { StyledStrongPasswordFeature } from '../SignUp/StrongPasswordFeature.styles';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopupError from './PopupError/PopupError';
import {
  faLock,
  faUser,
  faEnvelope,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASS_REGEX = /^(?=.*[A-Z]).{6,}$/;

const SignUp = () => {
  const [inputs, setInputs] = useState({});
  const [isLogIn, setIsLogIn] = useState(false);
  const [dataExistError, setIsDataExist] = useState('');
  const [isDataCorrect, setIsDataCorrect] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [canSignUp, setCanSignUp] = useState('');

  const navigate = useNavigate();

  const handleValidation = () => {
    if (inputs.name && (inputs.name.length >= 6 || inputs.name.length <= 24)) {
      setIsDataCorrect((prevState) => ({
        ...prevState,
        name: true,
      }));
    } else {
      setIsDataCorrect((prevState) => ({
        ...prevState,
        name: false,
      }));
    }
    if (EMAIL_REGEX.test(inputs.email)) {
      setIsDataCorrect((prevState) => ({
        ...prevState,
        email: true,
      }));
    } else {
      setIsDataCorrect((prevState) => ({
        ...prevState,
        email: false,
      }));
    }
    if (PASS_REGEX.test(inputs.password)) {
      setIsDataCorrect((prevState) => ({
        ...prevState,
        password: true,
      }));
    } else {
      setIsDataCorrect((prevState) => ({
        ...prevState,
        password: false,
      }));
    }
    console.log(isDataCorrect);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const showTakenData = (status) => {
    console.log(status);
    if (status === 3) {
      setIsDataExist('email and name already exist');
      setCanSignUp((prevState) => ({
        ...prevState,
        isEmailCorrect: false,
        isNameCorrect: false,
      }));
    } else if (status === 2) {
      setIsDataExist('email already exist');
    } else if (status === 1) {
      setIsDataExist('name already exist');
    } else {
      setIsDataExist('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
    //sprawdzic tu czy dane są poprawnie wprowadzone co nam da handle validaton
    axios
      .post('http://localhost/TripTipApi/index.php', {
        action: 'trySignUp',
        inputs,
      })
      .then((response) => {
        let status = response.data.status;
        if (status <= 3 && status >= 1) {
          showTakenData(status);
        } else if (status === 0) {
          if (false) {
            axios.post('http://localhost/TripTipApi/index.php', {
              action: 'create',
              inputs,
            });
            navigate('/');
          } else {
            return <PopupError />;
          }
        } else {
          console.log('status error');
        }
      })
      .catch((error) => {
        console.error('Błąd podczas żądania:', error);
      });
  };

  const changePath = () => {
    if (isLogIn) {
      navigate('/user/home');
    }
  };

  const checkPassword = (letters) => {
    if (letters <= 4) {
      return 'Too weak!';
    } else if (letters <= 6) {
      return 'Could be stronger';
    } else if (letters <= 8) {
      return 'Strong password';
    } else {
      return 'Very strong password';
    }
  };

  return (
    <StyledCenter>
      <StyledLogin>
        <h1>Sign up and start traveling!</h1>
        <StyledForm onSubmit={handleSubmit}>
          {dataExistError.length > 0 && (
            <DataExistError>{dataExistError}</DataExistError>
          )}
          <InputName
            className='form-input'
            canSignUp={canSignUp === 'true' ? 'true' : 'false'}
          >
            <HoverInfo content='Between 6 and 24 charakters'>
              <FontAwesomeIcon icon={faCircleInfo} />
            </HoverInfo>
            <input
              placeholder='Name'
              type='text'
              name='name'
              onChange={handleChange}
            />
            <div className='icon'>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </InputName>
          <div className='form-input email'>
            <HoverInfo content='One @, and domain name'>
              <FontAwesomeIcon icon={faCircleInfo} />
            </HoverInfo>
            <input
              placeholder='Email'
              type='text'
              name='email'
              onChange={handleChange}
            />
            <div className='icon'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
          <div className='form-input password'>
            <HoverInfo content='One big letter, at least 6 charakters'>
              <FontAwesomeIcon icon={faCircleInfo} />
            </HoverInfo>
            <input
              placeholder='Password'
              type='password'
              name='password'
              onChange={handleChange}
            />
            <div className='icon'>
              <FontAwesomeIcon icon={faLock} />
            </div>
          </div>
          <StyledStrongPasswordFeature
            strongLevel={inputs.password && inputs.password.length}
          >
            <div className='feature'>
              <div className='low'></div>
              <div className='better'></div>
              <div className='strong'></div>
              <div className='very-strong'></div>
            </div>
            <div className='passwordPowerInfo'>
              {inputs.password
                ? checkPassword(inputs.password.length)
                : 'Too week!'}
            </div>
          </StyledStrongPasswordFeature>
          <button onClick={changePath()}>Register</button>
          <div className='register'>
            <p>
              Already have an account?
              <span onClick={() => navigate('/user/login')}> Login </span>
            </p>
          </div>
        </StyledForm>
      </StyledLogin>
    </StyledCenter>
  );
};

export default SignUp;
