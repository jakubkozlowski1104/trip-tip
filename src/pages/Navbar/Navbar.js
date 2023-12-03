import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';
import SavedDestinations from '../../components/SavedDestinations/SavedDestinations';
import LikedDestinations from '../../components/LikedDestinations/LikedDestinations';
import HomePage from '../HomePage/HomePage';
import {
  StyledNav,
  StyledNavLink,
  AnimatedLine,
  StyledUl,
} from './Navbar.styles';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faGear } from '@fortawesome/free-solid-svg-icons';
import Newest from '../../components/Newest/Newest';
import SearchBar from '../../components/Atoms/SearchBar/SearchBar';
import Slider from '../../components/Organisms/BrowseCard/BrowseCard';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Navbar = ({ activeCategory }) => {
  const [animationData, setAnimationData] = useState({
    left: '0px',
    width: '105px',
  });
  const [selectedIndicator, setSelectedIndicator] = useState('1');
  const [isScrolled, setIsScrolled] = useState();
  const [showSearchbar, setShowSearchbar] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const token = localStorage.getItem('token');

  const handleLinkClick = (left, width) => {
    setAnimationData({
      left,
      width,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
  };

  const helloUser = () => {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      const decodedToken = jwtDecode(userToken);
      console.log(decodedToken);
    }
  };

  useEffect(() => {
    const isAdminFromStorage = localStorage.getItem('isAdmin');
    if (isAdminFromStorage === 'true') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    helloUser();
  }, []);

  const checkIsUserAdmin = async (userId) => {
    try {
      console.log(userId);
      const response = await axios.post(
        'http://localhost/TripTipApi/backend/isAdmin.php',
        {
          userId: userId,
        }
      );
      console.log(response);
      const isAdminValue = parseInt(response.data.is_admin, 10); // Konwersja na liczbę
      console.log('czy admin w use', isAdminValue);
      if (isAdminValue === 1) {
        setIsAdmin(true);
        localStorage.setItem('isAdmin', 'true');
      } else {
        setIsAdmin(false);
        localStorage.setItem('isAdmin', 'false');
      }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
    }
  };

  return (
    <BrowserRouter>
      <StyledNav $isScrolled={isScrolled}>
        <div className='logo'>
          <StyledNavLink to='/'>
            <img
              src={logo}
              alt='TripTip Logo'
              onClick={() => {
                handleLinkClick('0px', '105px');
                setSelectedIndicator('1');
              }}
            />
          </StyledNavLink>
        </div>
        <StyledUl $selectedIndicator={selectedIndicator}>
          <NavLink
            to='/'
            className='link'
            onClick={() => {
              handleLinkClick('0px', '105px');
              setSelectedIndicator('1');
            }}
          >
            Discover
          </NavLink>
          <NavLink
            to='/user/newest'
            className='link'
            onClick={() => {
              handleLinkClick('105px', '86px');
              setSelectedIndicator('2');
            }}
          >
            Newest
          </NavLink>
          <NavLink
            to='/user/saved'
            className='link'
            onClick={() => {
              handleLinkClick('191px', '72px');
              setSelectedIndicator('3');
            }}
          >
            Saved
          </NavLink>
          <NavLink
            to='/user/liked'
            className='link'
            onClick={() => {
              handleLinkClick('263px', '70px');
              setSelectedIndicator('4');
            }}
          >
            Liked
          </NavLink>
          {isAdmin && (
            <NavLink
              to='/user/admin'
              className='link'
              onClick={() => {
                handleLinkClick('320px', '100px');
                setSelectedIndicator('5');
              }}
            >
              admin
            </NavLink>
          )}
          <AnimatedLine $animationData={animationData}></AnimatedLine>
        </StyledUl>
        <div className='search-bar'>{showSearchbar && <SearchBar />}</div>
        <div className='icons'>
          <p>
            <FontAwesomeIcon icon={faGlobe} />
          </p>
          <p>
            <FontAwesomeIcon icon={faGear} />
          </p>
        </div>
        <div className='buttons'>
          {(token && token.length) > 0 ? (
            <NavLink to='user/login'>
              <button className='button-logout' onClick={() => logoutUser()}>
                Log out
              </button>
            </NavLink>
          ) : token !== 'undefined' ? (
            <>
              <NavLink to='user/login'>
                <button className='button-login'>Log in</button>
              </NavLink>
              <NavLink to='user/signup'>
                <button className='button-signup'>Sign up</button>
              </NavLink>
            </>
          ) : (
            <p>Token is undefined</p>
          )}
        </div>
      </StyledNav>

      <Routes>
        <Route
          index
          element={
            <HomePage
              setIsScrolled={setIsScrolled}
              showSearchbar={showSearchbar}
              setShowSearchbar={setShowSearchbar}
              activeCategory={activeCategory}
            />
          }
        />
        <Route path='user/newest' element={<Newest />} />
        <Route
          path='user/saved'
          element={
            <SavedDestinations
              setIsScrolled={setIsScrolled}
              showSearchbar={showSearchbar}
              setShowSearchbar={setShowSearchbar}
              activeCategory={activeCategory}
            />
          }
        />
        <Route
          path='user/liked'
          element={
            <LikedDestinations
              setIsScrolled={setIsScrolled}
              showSearchbar={showSearchbar}
              setShowSearchbar={setShowSearchbar}
              activeCategory={activeCategory}
            />
          }
        />
        <Route path='user/signup' element={<SignUp />} />
        <Route
          path='user/login'
          element={<LogIn checkIsUserAdmin={checkIsUserAdmin} />}
        />
        <Route path='user/card' element={<Slider />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
