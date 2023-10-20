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

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost/TripTipApi/user/${id}/delete`)
      .then((response) => {
        getUsers();
      });
  };

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((user, id) => (
          <li key={user.id}>
            <p>Id: {id + 1}</p>
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
