import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';
import { theme } from '../../assets/styles/Theme';
import Navbar from '../Navbar/Navbar';
import AsideNav from '../../components/AsideNav/AsideNav';
import CardInfo from '../../components/CardInfo/CardInfo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='App'>
        <Navbar />
        <AsideNav />
        <CardInfo />
      </div>
    </ThemeProvider>
  );
}

export default App;
