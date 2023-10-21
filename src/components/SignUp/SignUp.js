import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [inputs, setInputs] = useState({});
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

  return (
    <>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label>Email:</label>
          <input type='text' name='email' onChange={handleChange} />
        </div>
        <div className='form-input'>
          <label>Name:</label>
          <input type='text' name='name' onChange={handleChange} />
        </div>
        <div className='form-input'>
          <label>Password:</label>
          <input type='password' name='password' onChange={handleChange} />
        </div>
        <button>Add user</button>
      </form>
    </>
  );
};

export default SignUp;
