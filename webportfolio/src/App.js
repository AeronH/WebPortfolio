import './App.css';
import NavBar from './Components/NavBar/NavBar';
import IntroPage from './Pages/IntroPage';
import AboutPage from './Pages/AboutPage';
import MyWork from './Pages/MyWork'
import Contact from './Pages/Contact';
import GlobalStyles, { GlobalContainer } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react'

function App() {

  const lightTheme = {
    colors: {
      dark: '#0d1321',
      lightDark: '#1d2d44',
      gray: '#3e5c76',
      darkTeal: '#748cab',
      lightTeal: '#f0ebd8'
    }
  };

  const darkTheme = {
    colors :{
      dark: '#f0ebd8',
      lightDark: '#748cab',
      gray: '#3e5c76',
      darkTeal: '#1d2d44',
      lightTeal: '#0d1321'
    }
  };

  const [colorTheme, setColorTheme] = useState('dark');

  return (
    
      <div className="App">
        <ThemeProvider theme ={colorTheme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          
          <IntroPage setColorTheme={setColorTheme}
                     colorTheme={colorTheme}
                     darkTheme={darkTheme}
                     lightTheme={lightTheme}/>
          <GlobalContainer>
            <NavBar />
            
            <AboutPage/>

            <MyWork />

            <Contact/>
          </GlobalContainer>
        </ThemeProvider>
      </div>
    
  );
}

export default App;

