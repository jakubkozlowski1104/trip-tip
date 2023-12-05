import React from 'react';
import { StyledNav, StyledNavLink } from './AdminNavigation.styles';
import { NavLink } from 'react-router-dom';

const AdminNavigation = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledNavLink to='/user/admin/' className='link'>
            Main
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/user/admin/users' className='link'>
            Users
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/user/admin/reviews' className='link'>
            Reviews
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/user/admin/destinations' className='link'>
            Destinations
          </StyledNavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default AdminNavigation;
