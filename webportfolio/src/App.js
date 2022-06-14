import './App.css';
import NavBar from './Components/NavBar/NavBar';
import IntroPage from './Pages/IntroPage';
import AboutPage from './Pages/AboutPage';
import MyWork from './Pages/MyWork'
import Contact from './Pages/Contact';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

const theme ={
  colors: {
    dark: '#0b0c10',
    lightDark: '#1f2833',
    gray: '#c5c6c7',
    lightTeal: '#66fcf1',
    darkTeal: '#45a29e'
  }
}

function App() {
  return (
    <ThemeProvider theme ={theme}>
      <div className="App">
        <GlobalStyles />
        <NavBar />

        <IntroPage/>

        <AboutPage />

        <MyWork id='MyWork'/>

        <Contact id='Contact'/>
        
      </div>
    </ThemeProvider>
  );
}

export default App;