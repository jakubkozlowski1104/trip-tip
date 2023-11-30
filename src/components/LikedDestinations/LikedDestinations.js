import React from 'react';
import HomePage from '../../views/HomePage/HomePage';

const LikedDestinations = ({
  setIsScrolled,
  showSearchbar,
  setShowSearchbar,
  activeCategory,
}) => {
  return (
    <HomePage
      activeUserPick='liked'
      setIsScrolled={setIsScrolled}
      showSearchbar={showSearchbar}
      setShowSearchbar={setShowSearchbar}
      activeCategory={activeCategory}
    />
  );
};

export default LikedDestinations;
