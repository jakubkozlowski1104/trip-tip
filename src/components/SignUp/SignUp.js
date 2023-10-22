import { useState } from 'react';
import axios from 'axios';
import { StyledLogin, StyledCenter, StyledForm } from '../SignUp/SignUp.styles';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleExclamation,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

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

export default SignUp;
