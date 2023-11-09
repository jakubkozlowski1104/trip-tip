/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import {
  StyledLogin,
  StyledCenter,
  StyledForm,
  DataExistError,
} from '../SignUp/SignUp.styles';
import { StyledStrongPasswordFeature } from '../SignUp/StrongPasswordFeature.styles';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PopupError from './PopupError/PopupError';

const SignUp = () => {
  const [inputs, setInputs] = useState({});
  const [isLogIn, setIsLogIn] = useState(false);
  const [isloginwrong, setIsLoginWrong] = useState(false);
  const [isDataExist, setIsDataExist] = useState('');
  const [canSignUp, setCanSignUp] = useState({
    isNameCorrect: false,
    isEmailCorrect: false,
    isPasswordCorrect: false,
  });

  const navigate = useNavigate();

  const handleValidation = () => {
    if (inputs.name && inputs.name.length < 6) {
      setCanSignUp((prevState) => ({
        ...prevState,
        isNameCorrect: false,
      }));
    } else {
      setCanSignUp((prevState) => ({
        ...prevState,
        isNameCorrect: true,
      }));
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const showTakenDate = (status) => {
    console.log(status);
    if (status === 3) {
      setIsDataExist('email and name already exist');
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
    axios
      .post('http://localhost/TripTipApi/index.php', {
        action: 'trySignUp',
        inputs,
      })
      .then((response) => {
        let status = response.data.status;
        console.log(response.data);
        if (status <= 3 && status >= 1) {
          showTakenDate(status);
        } else if (status === 0) {
          if (canSignUp.isNameCorrect) {
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
      <StyledLogin isloginwrong={isloginwrong ? 'true' : undefined}>
        <h1>Sign up and start traveling!</h1>
        <StyledForm onSubmit={handleSubmit}>
          {/* {isDataExist.length > 0 && (
            <DataExistError>{isDataExist}</DataExistError>
          )} */}
          <DataExistError>{isDataExist}</DataExistError>
          <div className='form-input'>
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
          <div className='form-input'>
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
          <div className='form-input'>
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
