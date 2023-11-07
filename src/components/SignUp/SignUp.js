/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import { StyledLogin, StyledCenter, StyledForm } from '../SignUp/SignUp.styles';
import { StyledStrongPasswordFeature } from '../SignUp/StrongPasswordFeature.styles';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  const [inputs, setInputs] = useState({});
  const [isLogIn, setIsLogIn] = useState(false);
  const [isloginwrong, setIsLoginWrong] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost/TripTipApi/index.php', {
      action: 'create',
      inputs,
    });
    navigate('/');
  };

  const changePath = () => {
    if (isLogIn) {
      console.log('siema');
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
          <button onClick={changePath()}></button>
          <div className='register'>
            <p>
              Already have an account?
              <span onClick={() => navigate('/user/login')}>
                {() => checkPassword()}
              </span>
            </p>
          </div>
        </StyledForm>
      </StyledLogin>
    </StyledCenter>
  );
};

export default SignUp;
