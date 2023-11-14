/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import {
  StyledLogin,
  StyledCenter,
  StyledForm,
  DataExistError,
  HoverInfo,
  IconName,
} from '../SignUp/SignUp.styles';
import { StyledStrongPasswordFeature } from '../SignUp/StrongPasswordFeature.styles';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faUser,
  faEnvelope,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASS_REGEX = /^(?=.*[A-Z]).{6,}$/;

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLogIn, setIsLogIn] = useState(false);
  const [dataExistError, setIsDataExist] = useState('');
  const [isDataCorrect, setIsDataCorrect] = useState({
    name: 'none',
    email: 'none',
    password: 'none',
  });
  const [canSignUp, setCanSignUp] = useState(false);

  const navigate = useNavigate();

  const handleValidation = () => {
    console.log('wchodzi');
    if (inputs.name && inputs.name.length >= 6 && inputs.name.length <= 24) {
      setIsDataCorrect((prevState) => ({
        ...prevState,
        name: 'true',
      }));
    } else {
      setIsDataCorrect((prevState) => ({
        ...prevState,
        name: 'false',
      }));
    }
    if (EMAIL_REGEX.test(inputs.email)) {
      setIsDataCorrect((prevState) => ({
        ...prevState,
        email: 'true',
      }));
    } else {
      setIsDataCorrect((prevState) => ({
        ...prevState,
        email: 'false',
      }));
    }

    if (PASS_REGEX.test(inputs.password)) {
      setIsDataCorrect((prevState) => ({
        ...prevState,
        password: 'true',
      }));
    } else {
      setIsDataCorrect((prevState) => ({
        ...prevState,
        password: 'false',
      }));
    }
       };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const showTakenData = (status) => {
    if (status === 3) {
      setIsDataExist('email and name already exist');
    } else if (status === 2) {
      setIsDataExist('email already exist');
    } else if (status === 1) {
      setIsDataExist('name already exist');
    } else {
      setIsDataExist('');
      setCanSignUp(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
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
          if (
            isDataCorrect.name === 'true' &&
            isDataCorrect.email === 'true' &&
            isDataCorrect.password === 'true'
          ) {
            axios.post('http://localhost/TripTipApi/index.php', {
              action: 'create',
              inputs,
            });
            navigate('/');
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
          {console.log(inputs.name.length)}
          <div className='form-input'>
            <HoverInfo content='Between 6 and 24 charakters'>
              <IconName canSignUp={isDataCorrect.name}>
                <FontAwesomeIcon icon={faCircleInfo} />
              </IconName>
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
          </div>
          <div className='form-input email'>
            <HoverInfo content='One @, and domain name'>
              <IconName canSignUp={isDataCorrect.email}>
                <FontAwesomeIcon icon={faCircleInfo} />
              </IconName>
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
              <IconName canSignUp={isDataCorrect.password}>
                <FontAwesomeIcon icon={faCircleInfo} />
              </IconName>
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
