import Header from 'components/Header/Header';
import BottomMenu from 'components/BottomMenu/BottomMenu';
import {Navigate} from 'react-router-dom';
import {useContext} from 'react';
import UserContext from "../contexts/UserContext";

// Session timeout = 5min
const TOKEN_TIMEOUT = 1000*60*5;

export default function PrivatePage({children}) {
  console.log('LOADED PivatePage');

  const {user} = useContext(UserContext);
  const tokenObj = JSON.parse(localStorage.getItem('trackIt-token'));
  const timestampNow = + new Date();


  if ((!tokenObj) || (!tokenObj.token)){
    localStorage.removeItem("trackIt-user");
    alert('Você não está autorizado a acessar esta página!');
    return(<Navigate to='/' replace={true} />);

  } else if (timestampNow - tokenObj.loginTime >= TOKEN_TIMEOUT){
    localStorage.removeItem("trackIt-user");
    alert('Sessão expirada. Faça login novamente');
    return(<Navigate to='/' replace={true} />);
    
  } else if(user?.image?.length===0){
    return(<Navigate to='/' replace={true} />);

  } else{
    return (
      <>
      <Header/>
      {children}
      <BottomMenu/>
      </>
    )
  }
}
