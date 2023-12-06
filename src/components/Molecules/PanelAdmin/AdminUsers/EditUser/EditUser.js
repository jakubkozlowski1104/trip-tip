import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledForm, StyledHeader } from './EditUser.styles';

const EditUser = ({
  setNewUser,
  userData,
  setSelectedUserData,
  setIsModalOpen,
}) => {
  console.log(userData);
  const [name, setName] = useState(userData.name || ''); // Ustawienie początkowej wartości na podstawie danych użytkownika
  const [email, setEmail] = useState(userData.email || ''); // Ustawienie początkowej wartości na podstawie danych użytkownika
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost/TripTipApi/backend/updateUser.php',
        {
          id: userData.id, // Dodanie ID użytkownika do żądania aktualizacji
          name: name,
          email: email,
          password: password,
        }
      );

      if (response.data.status === 1) {
        setNewUser(response.data.status);
      }

      setSelectedUserData({ ...userData, name, email }); // Aktualizacja danych użytkownika po zapisie
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StyledHeader>Edit User</StyledHeader>
      <StyledForm onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>SAVE</button>
        <div className='close' onClick={() => setIsModalOpen(false)}>
          X
        </div>
      </StyledForm>
    </>
  );
};

export default EditUser;
