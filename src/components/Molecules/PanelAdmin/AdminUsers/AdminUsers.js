import { StyledWrapper } from './AdminUsers.styles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUser from './AddUser/AddUser.js';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState(0);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        'http://localhost/TripTipApi/backend/getAllUsers.php'
      );
      setUsers(response.data);
    } catch (error) {
      console.error('Wystąpił błąd:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [newUser]);

  return (
    <StyledWrapper>
      <h1>Lista Użytkowników</h1>
      <AddUser setNewUser={setNewUser} />
      <ul>
        <li className='header'>
          <div className='idx elem'>ID</div>
          <div className='name elem'>Name</div>
          <div className='email elem'>Email</div>
          <div className='is-admin elem'>Admin</div>
        </li>
        {users.map((user, idx) => (
          <li key={user.id}>
            <div className='idx elem'>{idx + 1}. </div>
            <div className='name elem'>{user.name}</div>
            <div className='email elem'>{user.email}</div>
            <div className='is-admin elem'>{user.is_admin ? 'yes' : 'no'}</div>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

export default AdminUsers;
