import Navbar from '../Navbar/Navbar';
import AsideNav from '../../components/AsideNav/AsideNav';
import React, { useState } from 'react';

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState('none');
  return (
    <div>
      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <AsideNav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
};

export default Dashboard;
