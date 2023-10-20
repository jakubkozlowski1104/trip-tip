import { useState } from 'react';
import axios from 'axios';

const LogIn = () => {
  const [inputs, setInputs] = useState({});

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
          alert('udalo sie zalogowac');
          console.log(response.data.message);
          console.log(response.data.user);
        } else {
          alert('NIE udalo sie zalogowac');
          console.log(response.data.message);
        }
      });
    console.log(inputs);
  };

  return (
    <>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label>Email:</label>
          <input type='text' name='email' onChange={handleChange} />
        </div>
        <div className='form-input'>
          <label>Password:</label>
          <input type='password' name='password' onChange={handleChange} />
        </div>
        <button>Sign up</button>
      </form>
    </>
  );
};

export default LogIn;
