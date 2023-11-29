import { useState } from 'react';
import axios from 'axios';
import { StyledLogin, StyledCenter, StyledForm } from '../LogIn/LogIn.styles';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleExclamation,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode';

const LogIn = () => {
  const [inputs, setInputs] = useState({});
  const [isLogIn, setIsLogIn] = useState(false);
  const [isloginwrong, setIsLoginWrong] = useState(false);
  const navigate = useNavigate();

  const helloUser = () => {
    console.log(localStorage);
    const userToken = localStorage.getItem('token');
    if (userToken) {
      console.log(userToken);

      const decodedToken = jwtDecode(userToken);
      console.log(decodedToken);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost/TripTipApi/backend/login.php', {
        email: inputs.email,
        password: inputs.password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        helloUser();
        if (response.data.status === 1) {
          setIsLogIn(true);
          setIsLoginWrong(false);
        } else {
          setIsLoginWrong(true);
        }
      });
  };

  const changePath = () => {
    if (isLogIn) {
      navigate('/');
    }
  };

  return (
    <StyledCenter>
      <StyledLogin isloginwrong={isloginwrong ? 'true' : undefined}>
        <h1>Login</h1>
        <StyledForm onSubmit={handleSubmit}>
          <div className='form-input'>
            <input
              placeholder='Email'
              type='text'
              name='email'
              onChange={handleChange}
            />
            <div className='icon'>
              <FontAwesomeIcon icon={faUser} />
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
          <div className='info'>
            <div className='error'>
              {isloginwrong && (
                <>
                  <FontAwesomeIcon
                    className='error-icon'
                    icon={faCircleExclamation}
                  />
                  <p>Entered data is incorrect</p>
                </>
              )}
            </div>
            <p className='forgot'>Forgot Password?</p>
          </div>
          <button onClick={changePath()}>Login</button>
          <div className='register'>
            <p>
              Don't have an accont?
              <span onClick={() => navigate('/user/signup')}> Register</span>
            </p>
          </div>
        </StyledForm>
      </StyledLogin>
    </StyledCenter>
  );
};

export default LogIn;
