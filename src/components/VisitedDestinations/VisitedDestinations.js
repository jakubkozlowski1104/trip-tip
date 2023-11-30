import React from 'react';
import HomePage from '../../views/HomePage/HomePage';

const VisitedDestinations = ({
  setIsScrolled,
  showSearchbar,
  setShowSearchbar,
  activeCategory,
}) => {
  return (
    <HomePage
      setIsScrolled={setIsScrolled}
      showSearchbar={showSearchbar}
      setShowSearchbar={setShowSearchbar}
      activeCategory={activeCategory}
    />
  );
};

export default VisitedDestinations;
