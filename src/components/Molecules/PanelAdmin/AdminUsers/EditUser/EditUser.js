import React, { useState } from 'react';
import axios from 'axios';
import { StyledForm, StyledHeader } from './EditUser.styles';

const EditUser = ({
  setNewUser,
  userData,
  setSelectedUserData,
  setIsModalOpen,
}) => {
  console.log(userData);
  const [name, setName] = useState(userData.name || '');
  const [email, setEmail] = useState(userData.email || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost/TripTipApi/backend/updateUser.php',
        {
          userId: userData.id,
          name: name,
          email: email,
        }
      );

      if (response.data.status === 1) {
        console.log('User updated successfully');
        setIsModalOpen(false);
      } else {
        console.error('Wystąpił błąd podczas aktualizacji użytkownika');
      }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
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
