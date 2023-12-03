import React from 'react';
import HomePage from '../../pages/HomePage/HomePage';

const SavedDestinations = ({
  setIsScrolled,
  showSearchbar,
  setShowSearchbar,
  activeCategory,
}) => {
  return (
    <HomePage
      activeUserPick='saved'
      setIsScrolled={setIsScrolled}
      showSearchbar={showSearchbar}
      setShowSearchbar={setShowSearchbar}
      activeCategory={activeCategory}
    />
  );
};

export default SavedDestinations;
