import './App.css';
import IntroPage from './Pages/IntroPage';
import AboutPage from './Pages/AboutPage';
import MyWork from './Pages/MyWork'
import Contact from './Pages/Contact';
import GlobalStyles, { GlobalContainer } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react'

function App() {

  const darkTheme = {
    colors: {
      dark: '#0d1321',
      lightDark: '#1d2d44',
      gray: '#3e5c76',
      darkTeal: '#748cab',
      lightTeal: '#f0ebd8'
    }
  };

  const lightTheme = {
    colors :{
      dark: '#f0ebd8',
      lightDark: '#748cab',
      gray: '#3e5c76',
      darkTeal: '#1d2d44',
      lightTeal: '#0d1321'
    }
  };

  const [colorTheme, setColorTheme] = useState('light');

  return (
      <div className="App">
        <ThemeProvider theme ={colorTheme === 'light' ? lightTheme : darkTheme}>
          
                <IntroPage setColorTheme={setColorTheme}
                          colorTheme={colorTheme}
                          darkTheme={darkTheme}
                          lightTheme={lightTheme}/>
              
              <GlobalContainer>

                  <AboutPage />
                
                  <MyWork />
                
                  <Contact />
                
              </GlobalContainer>
           
          <GlobalStyles />
                    
        </ThemeProvider>
      </div>
    
  );
}

export default App;

