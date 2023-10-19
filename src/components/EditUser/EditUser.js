import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate

const EditUser = () => {
  const [input, setInput] = useState({
    id: '',
    email: '',
    name: '',
    password: '',
  });
  const navigate = useNavigate();

  const { id } = useParams();

  // Make getUsers async
  const getUsers = async () => {
    try {
      const response = await axios.get(
        `http://localhost/TripTipApi/user/${id}`
      );
      console.log(response.data.length);
      setInput(response.data[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost/TripTipApi/user/${id}/edit`, input)
      .then((response) => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <>
      <h1>edit User</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label>Email:</label>
          {console.log('Email value in the state:', input.email)}
          <input
            value={input.email}
            type='text'
            name='email'
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <label>Name:</label>
          <input
            value={input.name}
            type='text'
            name='name'
            onChange={handleChange}
          />
        </div>
        <button>Create</button>
      </form>
    </>
  );
};

export default EditUser;
