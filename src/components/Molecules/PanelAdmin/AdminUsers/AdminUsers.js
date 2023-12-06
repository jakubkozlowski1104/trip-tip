import { StyledWrapper } from './AdminUsers.styles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUser from './AddUser/AddUser.js';
import EditUser from './EditUser/EditUser.js';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null); // Nowy stan do przechowywania ID wybranego użytkownika do edycji
  const [selectedUserData, setSelectedUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
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

  const handleEdit = async (userId) => {
    setIsModalOpen(true);
    setSelectedUserId(userId); // Ustawienie ID wybranego użytkownika do edycji

    const userData = users[userId]; // Dane użytkownika do edycji z odpowiedzi
    console.log(userData);
    setSelectedUserData(userData); // Ustawienie danych wybranego użytkownika do edycji
  };

  const handleDelete = async (userId) => {
    console.log(userId);
    try {
      const response = await axios.post(
        'http://localhost/TripTipApi/backend/deleteUser.php',
        {
          userId: userId,
        }
      );
      console.log(response);
      if (response.data.status === 1) {
        fetchUsers();
      } else {
        console.error('Nie udało się usunąć użytkownika.');
      }
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
          <div className=''>Delete</div>
        </li>
        {users.map((user, idx) => (
          <li key={user.id}>
            <div className='idx elem'>{idx + 1}. </div>
            <div className='name elem'>{user.name}</div>
            <div className='email elem'>{user.email}</div>
            <div className='is-admin elem'>{user.is_admin ? 'yes' : 'no'}</div>
            <button className='btn edit' onClick={() => handleEdit(idx)}>
              EDIT
            </button>
            <button
              className='btn delete'
              onClick={() => handleDelete(user.id)}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className='modal-container'>
          <EditUser
            setNewUser={setNewUser}
            userData={selectedUserData} // Przekazanie danych wybranego użytkownika
            setSelectedUserData={setSelectedUserData}
            setIsModalOpen={setIsModalOpen} // Funkcja do aktualizacji danych użytkownika po edycji
          />
        </div>
      )}
    </StyledWrapper>
  );
};

export default AdminUsers;
