import GlobalStyle from './assets/styles/GlobalStyle';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from 'components/LoginPage/LoginPage';



function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      Hello World
    </>
  );
}

export default App;
