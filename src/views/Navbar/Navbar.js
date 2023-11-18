import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';
import SavedDestinations from '../../components/SavedDestinations/SavedDestinations';
import VisitedDestinations from '../../components/VisitedDestinations/VisitedDestinations';
import HomePage from '../HomePage/HomePage';
import { StyledNav, StyledNavLink, AnimatedLine } from './Navbar.styles';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faGear,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import Newest from '../../components/Newest/Newest';

const Navbar = () => {
  const [animationData, setAnimationData] = useState('0px');

  const handleLinkClick = (left) => {
    setAnimationData(left);
  };

  return (
    <BrowserRouter>
      <StyledNav>
        <div className='logo'>
          <StyledNavLink to='/'>
            <img src={logo} alt='TripTip Logo' />
          </StyledNavLink>
        </div>
        <ul>
          <NavLink
            to='/'
            className='link'
            onClick={() => handleLinkClick('0px')}
          >
            Discover
          </NavLink>
          <NavLink
            to='/user/newest'
            className='link'
            onClick={() => handleLinkClick('105px')}
          >
            Newest
          </NavLink>
          <NavLink
            to='/user/saved'
            className='link'
            onClick={() => handleLinkClick('191px')}
          >
            Saved
          </NavLink>
          <NavLink
            to='/user/visited'
            className='link'
            onClick={() => handleLinkClick('263px')}
          >
            Visited
          </NavLink>
          <AnimatedLine
            $animationData={
              typeof animationData === 'string' ? animationData : '0px'
            }
          ></AnimatedLine>
        </ul>
        <div className='search-bar'>
          <input type='text' placeholder='Search' />
          <div className='search-icon'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className='icons'>
          <p>
            <FontAwesomeIcon icon={faGlobe} />
          </p>
          <p>
            <FontAwesomeIcon icon={faGear} />
          </p>
        </div>
        <div className='buttons'>
          <NavLink to='user/login'>
            <button className='button-login'>Log in</button>
          </NavLink>
          <NavLink to='user/signup'>
            <button className='button-signup'>Sign up</button>
          </NavLink>
        </div>
      </StyledNav>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path='user/newest' element={<Newest />} />
        <Route path='user/saved' element={<SavedDestinations />} />
        <Route path='user/visited' element={<VisitedDestinations />} />
        <Route path='user/signup' element={<SignUp />} />
        <Route path='user/login' element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
