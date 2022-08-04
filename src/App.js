import GlobalStyle from './assets/styles/GlobalStyle';
import {useState} from 'react';
import UserContext from "./contexts/UserContext";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from 'components/LoginPage/LoginPage';
import SignUpPage from 'components/SignUpPage/SignUpPage';
import HabitsPage from 'components/HabitsPage/HabitsPage';
import TodayPage from 'components/TodayPage/TodayPage';
import HistoryPage from 'components/HistoryPage/HistoryPage';
import PrivatePage from 'components/PrivatePage';



export default function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<PrivatePage><HabitsPage /></PrivatePage>} />
            <Route path="/hoje" element={<PrivatePage><TodayPage /></PrivatePage>} />
            <Route path="/historico" element={<PrivatePage><HistoryPage /></PrivatePage>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      
    </>
  );
}

