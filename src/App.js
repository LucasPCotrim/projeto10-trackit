import GlobalStyle from './assets/styles/GlobalStyle';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from 'components/LoginPage/LoginPage';
import SignUpPage from 'components/SignUpPage/SignUpPage';



function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
