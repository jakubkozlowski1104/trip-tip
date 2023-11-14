import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { StyledStrongPasswordFeature } from '../SignUp/StrongPasswordFeature.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyledLogin,
  StyledCenter,
  StyledForm,
  DataExistError,
  HoverInfo,
  IconName,
} from '../SignUp/SignUp.styles';
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
      console.log(canSignUp);
      if (canSignUp) {
        console.log('wchodzi');
        const responseSignUp = await axios.post(
          'http://localhost/TripTipApi/index.php',
          {
            action: 'create',
            inputs,
          }
        );
        if (responseSignUp.data.status) {
          navigate('/user/home');
          console.log('New user Sign Up');
        } else {
          console.log('erro');
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
