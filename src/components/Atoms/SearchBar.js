import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledSearchBar } from './SearchBar.styles';

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <div className='search-bar'>
        <input type='text' placeholder='Search' />
        <div className='search-icon'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </StyledSearchBar>
  );
};

export default SearchBar;
