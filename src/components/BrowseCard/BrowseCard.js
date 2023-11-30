import React from 'react';
import { StyledCenter } from '../BrowseCard/BrowseCard.styles';
import { useLocation } from 'react-router-dom';

const BrowseCard = () => {
  const location = useLocation();
  const { destination } = location.state || {};
  return (
    <StyledCenter>
      <h1>{destination.description}</h1>
      <h2>siema</h2>
    </StyledCenter>
  );
};

export default BrowseCard;
