import {BottomMenuWrapper, Button, ProgressBarContainer} from './BottomMenu.style'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function BottomMenu() {
  return (
    <BottomMenuWrapper>
      <Button>Hábitos</Button>
      <ProgressBar />
      <Button>Histórico</Button>
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