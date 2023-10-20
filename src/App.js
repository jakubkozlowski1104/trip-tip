import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import UserList from './components/UserList/UserList';
import Registration from './components/Registration/Registration';
import EditUser from './components/EditUser/EditUser';
import LogIn from './components/LogIn/LogIn';

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
              <NavLink to='user/create'>Create User</NavLink>
            </li>
            <li>
              <NavLink to='user/login'>Log In</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<UserList />} />
          <Route path='user/create' element={<Registration />} />
          <Route path='user/login' element={<LogIn />} />
          <Route path='user/:id/edit' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
