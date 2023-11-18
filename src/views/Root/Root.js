import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';
import { theme } from '../../assets/styles/Theme';
import Navbar from '../Navbar/Navbar';
import HomePage from '../HomePage/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='App'>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
