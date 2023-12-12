import React from 'react';
import HomePage from '../../pages/HomePage/HomePage';

const Newest = ({
  setIsScrolled,
  showSearchbar,
  setShowSearchbar,
  activeCategory,
}) => {
  return (
    <HomePage
      activeUserPick='newest'
      setIsScrolled={setIsScrolled}
      showSearchbar={showSearchbar}
      setShowSearchbar={setShowSearchbar}
      activeCategory={activeCategory}
    />
  );
};

export default Newest;
