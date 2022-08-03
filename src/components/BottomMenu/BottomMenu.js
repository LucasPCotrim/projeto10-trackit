import {BottomMenuWrapper, Button, ProgressBarContainer} from './BottomMenu.style'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link} from 'react-router-dom'

export default function BottomMenu() {
  return (
    <BottomMenuWrapper>
      <Link to='/habitos' ><Button>Hábitos</Button></Link>
      <Link to='/hoje' ><ProgressBar/></Link>
      <Link to='/historico' ><Button>Histórico</Button></Link>
    </BottomMenuWrapper>
  )
}


function ProgressBar(){
  return (
    <ProgressBarContainer>
      <CircularProgressbar
        value={42}
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