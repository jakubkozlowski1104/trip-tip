import React from 'react';
import { StyledAsideNavWrapper } from '../AsideNav/AsideNav.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPersonHiking,
  faCity,
  faSun,
  faUmbrellaBeach,
  faPersonWalkingLuggage,
  faLandmark,
} from '@fortawesome/free-solid-svg-icons';

const AsideNav = () => {
  return (
    <StyledAsideNavWrapper>
      <div className='pick-category'>
        <p>choose a category</p>
      </div>
      <div className='options'>
        <div className='option'>
          <div className='icon'>
            <FontAwesomeIcon icon={faPersonHiking} />
          </div>
          <p>active</p>
        </div>
        <div className='option'>
          <div className='icon'>
            <FontAwesomeIcon icon={faCity} />
          </div>
          <p>cities</p>
        </div>
        <div className='option'>
          <div className='icon'>
            <FontAwesomeIcon icon={faSun} />
          </div>
          <p>nature</p>
        </div>
        <div className='option'>
          <div className='icon'>
            <FontAwesomeIcon icon={faUmbrellaBeach} />
          </div>
          <p>relax</p>
        </div>
        <div className='option'>
          <div className='icon'>
            <FontAwesomeIcon icon={faPersonWalkingLuggage} />
          </div>
          <p>adventure</p>
        </div>
        <div className='option'>
          <div className='icon'>
            <FontAwesomeIcon icon={faLandmark} />
          </div>
          <p>historical</p>
        </div>
      </div>
    </StyledAsideNavWrapper>
  );
};

export default AsideNav;
