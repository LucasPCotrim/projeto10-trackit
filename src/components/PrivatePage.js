import Header from 'components/Header/Header';
import BottomMenu from 'components/BottomMenu/BottomMenu';
import {Navigate} from 'react-router-dom'

// Session timeout = 5min
const TOKEN_TIMEOUT = 1000*60*5;

export default function PrivatePage({children}) {

  const tokenObj = JSON.parse(localStorage.getItem('trackIt-token'));
  const timestampNow = + new Date();

  if ((!tokenObj) || (!tokenObj.token)){
    alert('Você não está autorizado a acessar esta página!');
    return(<Navigate to='/' replace={true} />);

  } else if (timestampNow - tokenObj.loginTime >= TOKEN_TIMEOUT){
    alert('Sessão encerrada. Faça login novamente');
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
