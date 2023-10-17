import { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost/TripTipApi/index.php', inputs);

    console.log(inputs);
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
        <button>Create</button>
      </form>
    </>
  );
};

export default CreateUser;
