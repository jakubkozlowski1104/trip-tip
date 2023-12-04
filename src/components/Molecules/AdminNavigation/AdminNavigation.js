import React from 'react';
import { StyledNav } from './AdminNavigation.styles';
import { NavLink } from 'react-router-dom';

const AdminNavigation = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to='/user/admin/' className='link'>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to='/user/admin/users' className='link'>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to='/user/admin/reviews' className='link'>
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to='/user/admin/destinations' className='link'>
            Destinations
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default AdminNavigation;
