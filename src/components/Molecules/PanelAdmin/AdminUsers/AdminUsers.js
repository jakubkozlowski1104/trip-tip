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
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

export default AdminUsers;
