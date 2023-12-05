import { StyledContainer } from './AdminPanel.styles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, NavLink } from 'react-router-dom';
import AdminUsers from '../../Molecules/PanelAdmin/AdminUsers/AdminUsers';
import AdminReviews from '../../Molecules/PanelAdmin/AdminReviews/AdminReviews';
import AdminDestinations from '../../Molecules/PanelAdmin/AdminDestinations/AdminDestinations';
import AdminNavigation from '../../Molecules/PanelAdmin/AdminNavigation/AdminNavigation';
import AdminMain from '../../Molecules/PanelAdmin/AdminMain/AdminMain';

const AdminPanel = () => {
  return (
    <StyledContainer>
      <div className='admin-content'>
        <AdminNavigation />
        <Routes>
          <Route path='/' element={<AdminMain />} />
          <Route path='users' element={<AdminUsers />} />
          <Route path='/reviews' element={<AdminReviews />} />
          <Route path='/destinations' element={<AdminDestinations />} />
        </Routes>
      </div>
    </StyledContainer>
  );
};

export default AdminPanel;
