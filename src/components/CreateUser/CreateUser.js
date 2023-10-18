import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreateUser = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate(); // Use useNavigate instead of Navigate

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost/TripTipApi/index.php', inputs)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        navigate('/'); // Use navigate function
      });
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
