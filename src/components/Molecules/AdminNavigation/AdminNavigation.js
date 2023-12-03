import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/user/admin/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/user/admin/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="/user/admin/destinations">Destinations</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavigation;
