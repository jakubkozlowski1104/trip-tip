import { StyledWrapper } from './AdminUsers.styles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

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

  return (
    <StyledWrapper>
      <h1>Lista Użytkowników</h1>
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
