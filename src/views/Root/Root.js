import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';
import UserList from '../../components/UserList/UserList';
import EditUser from '../../components/EditUser/EditUser';
import HomePage from '../HomePage/HomePage';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';
import { theme } from '../../assets/styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='App'>
        <h5>React CRUD operations using PHP API and MySQL</h5>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <NavLink to='/'>User List</NavLink>
              </li>
              <li>
                <NavLink to='/user/home'>Home</NavLink>
              </li>
              <li>
                <NavLink to='user/signup'>Sign Up</NavLink>
              </li>
              <li>
                <NavLink to='user/login'>Log In</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route index element={<UserList />} />
            <Route path='user/signup' element={<SignUp />} />
            <Route path='user/login' element={<LogIn />} />
            <Route path='user/home' element={<HomePage />} />
            <Route path='user/:id/edit' element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;