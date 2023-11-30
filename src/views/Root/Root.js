import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';
import { theme } from '../../assets/styles/Theme';
import Navbar from '../Navbar/Navbar';
import AsideNav from '../../components/AsideNav/AsideNav';
import Dashboard from '../Dashboard/Dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='App'>
        <Dashboard/>
      </div>
    </ThemeProvider>
  );
}

export default App;
