import axios from 'axios';
import React, { useState, useEffect } from 'react';

const UserList = () => {
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get('http://localhost/TripTipApi/users').then((response) => {
      console.log(response.data);
    });
  };

  return (
    <>
      <h1>User List</h1>
    </>
  );
};

export default UserList;
