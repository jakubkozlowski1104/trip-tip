import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const getUsers = () => {
    axios.get(`http://localhost/TripTipApi/user/${id}`).then((response) => {
      setInputs(response.data[0]);
    });
  };

  useEffect(() => {
    getUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost/TripTipApi/user/${id}/edit`, inputs)
      .then((response) => {
        console.log(response.data);
        navigate('/');
      });
  };

  return (
    <>
      <h1>EditUser</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label>Email:</label>
          <input
            value={inputs.email}
            type='text'
            name='email'
            onChange={handleChange}
          />
        </div>
        <div className='form-input'>
          <label>Name:</label>
          <input
            value={inputs.name}
            type='text'
            name='name'
            onChange={handleChange}
          />
        </div>
        <button>Update</button>
      </form>
    </>
  );
};

export default EditUser;
