import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import UserList from './components/UserList/UserList';
import EditUser from './components/EditUser/EditUser';

function App() {
  return (
    <div className='App'>
      <h5>React CRUD operations using PHP API and MySQL</h5>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>User List</NavLink>
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
          <Route path='user/:id/edit' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
