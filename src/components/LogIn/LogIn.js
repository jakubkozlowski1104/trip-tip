import { useState } from 'react';
import axios from 'axios';
import { StyledLogin, StyledCenter, StyledForm } from '../LogIn/LogIn.styles';

const LogIn = () => {
  const [inputs, setInputs] = useState({});
  const [isLogIn, setIsLogIn] = useState(false);
  const [wrongLogin, setWrongLogin] = useState(false);

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
        console.log(response.data.status);
        if (response.data.status === 1) {
          setIsLogIn(true);
          setWrongLogin(false);
        } else {
          setWrongLogin(true);
        }
      });
  };

  return (
    <StyledCenter>
      <StyledLogin className='loginContainer'>
        <h1>Login</h1>
        {isLogIn && <h1>Jesteś zalogowany</h1>}
        <StyledForm onSubmit={handleSubmit}>
          {wrongLogin && (
            <p style={{ color: 'red', fontSize: '25px' }}>Niepoprawne dane</p>
          )}
          <div className='form-input'>
            <input
              placeholder='Email'
              type='text'
              name='email'
              onChange={handleChange}
            />
          </div>
          <div className='form-input'>
            <input
              placeholder='Password'
              type='password'
              name='password'
              onChange={handleChange}
            />
          </div>
          <div className='forgot'>
            <p>Forgot Password?</p>
          </div>
          <button>Login</button>
          <div className='register'>
            <p>
              Don't have an accont? <span>Register</span>
            </p>
          </div>
        </StyledForm>
      </StyledLogin>
    </StyledCenter>
  );
};

export default LogIn;
