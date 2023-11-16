import { useState } from 'react';
import axios from 'axios';
import { StyledLogin, StyledCenter, StyledForm } from '../LogIn/LogIn.styles';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleExclamation,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
const { default: jwt_decode } = require('jwt-decode');

const LogIn = () => {
  const [inputs, setInputs] = useState({});
  const [isLogIn, setIsLogIn] = useState(false);
  const [isloginwrong, setIsLoginWrong] = useState(false);
  const navigate = useNavigate();
  const userToken = localStorage.getItem('token');

  const helloUser = () => {
    if (userToken) {
      // Odkodowanie tokenu JWT, zakładając, że token zawiera informacje w postaci obiektu
      const decodedToken = jwt_decode(userToken);

      // Wyświetlenie powitania z nazwą zalogowanego użytkownika
      console.log(`Hello, ${decodedToken.username}!`);
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
      .post('http://localhost/TripTipApi/index.php', {
        action: 'login',
        inputs,
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
      console.log('siema');
      navigate('/user/home');
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
