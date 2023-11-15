import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { StyledStrongPasswordFeature } from '../SignUp/StrongPasswordFeature.styles';
import {
  StyledLogin,
  StyledCenter,
  StyledForm,
  DataExistError,
} from '../SignUp/SignUp.styles';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import InputField from './InputField/InputField';

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASS_REGEX = /^(?=.*[A-Z]).{6,}$/;

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [dataExistError, setIsDataExist] = useState('');
  const [isDataCorrect, setIsDataCorrect] = useState({
    name: 'none',
    email: 'none',
    password: 'none',
  });
  const [canSignUp, setCanSignUp] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const validateInputs = () => {
      const isNameValid = inputs.name.length >= 6 && inputs.name.length <= 24;
      const isEmailValid = EMAIL_REGEX.test(inputs.email);
      const isPasswordValid = PASS_REGEX.test(inputs.password);

      setIsDataCorrect({
        name: isNameValid ? 'true' : 'false',
        email: isEmailValid ? 'true' : 'false',
        password: isPasswordValid ? 'true' : 'false',
      });

      setCanSignUp(isNameValid && isEmailValid && isPasswordValid);
    };

    validateInputs();
  }, [inputs]);

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
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost/TripTipApi/index.php', {
      action: 'trySignUp',
      inputs,
    });
    let status = response.data.status;
    if (status <= 3 && status >= 1) {
      showTakenData(status);
    } else if (status === 0) {
      if (canSignUp) {
        const responseSignUp = await axios.post(
          'http://localhost/TripTipApi/index.php',
          {
            action: 'create',
            inputs,
          }
        );
        if (responseSignUp.data.status) {
          navigate('/user/home');
        } else {
          console.log('error');
        }
      }
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
          <InputField
            placeholder='Name'
            type='text'
            name='name'
            onChange={handleChange}
            icon={faUser}
            infoContent='Between 6 and 24 characters'
            canSignUp={isDataCorrect.name}
          />
          <InputField
            placeholder='Email'
            type='text'
            name='email'
            onChange={handleChange}
            icon={faEnvelope}
            infoContent='One @, and domain name'
            canSignUp={isDataCorrect.email}
          />
          <InputField
            placeholder='Password'
            type='password'
            name='password'
            onChange={handleChange}
            icon={faLock}
            infoContent='One big letter, at least 6 characters'
            canSignUp={isDataCorrect.password}
          />
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
          <button type='submit'>Register</button>

          <div className='register'>
            <p>
              Already have an account?
              <span
                onClick={() => {
                  navigate('/user/login');
                }}
              >
                {' '}
                Login{' '}
              </span>
            </p>
          </div>
        </StyledForm>
      </StyledLogin>
    </StyledCenter>
  );
};

export default SignUp;
