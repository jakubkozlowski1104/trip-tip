import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';
import HomePage from '../HomePage/HomePage';
import { StyledNav, StyledNavLink } from './Navbar.styles';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <BrowserRouter>
      <StyledNav>
        <div className='logo'>
          <StyledNavLink to='/'>
            <img src={logo} alt='TripTip Logo' />
          </StyledNavLink>
        </div>
        <ul>
          <li>
            <StyledNavLink to='/'>Discover</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='user/signup'>Sign Up</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='user/login'>Log In</StyledNavLink>
          </li>
        </ul>
      </StyledNav>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path='user/signup' element={<SignUp />} />
        <Route path='user/login' element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
