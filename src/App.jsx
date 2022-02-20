import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
//import { ThemeProvider } from 'styled-components';
//import AppContext from './AppContext';
import MainApp from './MainApp';
//import GlobalStyles from './theme/GlobalStyles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <MainApp />
          </BrowserRouter>
    </div>
  );
}

export default App;
