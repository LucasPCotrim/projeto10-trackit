import {BottomMenuWrapper, Button, ProgressBarContainer} from './BottomMenu.style';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import UserContext from "../../contexts/UserContext";

export default function BottomMenu() {

  const {user, } = useContext(UserContext);

  return (
    <BottomMenuWrapper>
      <Link to='/habitos' ><Button>Hábitos</Button></Link>
      <Link to='/hoje' ><ProgressBar value={user.dayProgress}/></Link>
      <Link to='/historico' ><Button>Histórico</Button></Link>
    </BottomMenuWrapper>
  )
}


function ProgressBar({value}){
  return (
    <ProgressBarContainer>
      <CircularProgressbar
        value={value}
        text={`Hoje`}
        background={true}
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: '#52B6FF',
          textColor: '#FFFFFF',
          pathColor: '#FFFFFF',
          trailColor: 'transparent'
        })
        }
      />
    </ProgressBarContainer>
  );
}