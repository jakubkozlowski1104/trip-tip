import { StyledContainer } from './AdminPanel.styles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavigation from '../../Molecules/AdminNavigation/AdminNavigation';
import { Routes, Route } from 'react-router-dom';
import AdminUsers from '../../Molecules/AdminUsers/AdminUsers';
import AdminReviews from '../../Molecules/AdminReviews/AdminReviews';
import AdminDestinations from '../../Molecules/AdminDestinations/AdminDestinations';

const AdminPanel = () => {
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
    <StyledContainer>
      <AdminNavigation />
      <div className='admin-content'>
        <Routes>
          <Route path='/users' element={<AdminUsers />} />
          <Route path='/reviews' element={<AdminReviews />} />
          <Route path='/destinations' element={<AdminDestinations />} />
        </Routes>
      </div>
      <h1>Lista Użytkowników</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </StyledContainer>
  );
};

export default AdminPanel;
