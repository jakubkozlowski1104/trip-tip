import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get('http://localhost/TripTipApi/users/').then((response) => {
      setUsers(response.data);
    });
  };

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost/TripTipApi/user/${id}/delete`)
      .then((response) => {
        console.log(response.data);
        getUsers();
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((user, num) => (
          <li key={user.id}>
            <p>Id: {num + 1}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <NavLink to={`user/${user.id}/edit`}>Edit </NavLink>
            <button onClick={() => deleteUser(user.id)}>deltete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
