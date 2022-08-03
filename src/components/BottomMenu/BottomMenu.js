import {BottomMenuWrapper, Button, ProgressBarContainer} from './BottomMenu.style'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function BottomMenu() {
  return (
    <BottomMenuWrapper>
      <Button>Hábitos</Button>
      <ProgressBarContainer>
        <CircularProgressbar
          value={69}
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
      <Button>Histórico</Button>
    </BottomMenuWrapper>
  )
}

export default BottomMenu