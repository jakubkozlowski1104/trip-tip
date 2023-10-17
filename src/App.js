import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import UserList from './components/UserList/UserList';
import CreateUser from './components/CreateUser/CreateUser';
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
              <NavLink to='user/create'>Create User</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<UserList />} />
          <Route path='user/create' element={<CreateUser />} />
          <Route path='user/:id/edit' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
