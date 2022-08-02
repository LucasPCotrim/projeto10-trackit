import GlobalStyle from './assets/styles/GlobalStyle';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from 'components/LoginPage/LoginPage';
import SignUpPage from 'components/SignUpPage/SignUpPage';
import HabitsPage from 'components/HabitsPage/HabitsPage';
import TodayPage from 'components/TodayPage/TodayPage';
import HistoryPage from 'components/HistoryPage/HistoryPage';


export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

