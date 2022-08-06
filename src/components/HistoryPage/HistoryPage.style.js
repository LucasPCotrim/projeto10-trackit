import styled, {keyframes} from 'styled-components';

const fadeInAnimation = keyframes`
 0% {transform: translateY(15px); opacity: 0}
 100% {transform: translateY(0px); opacity: 1}
`;

export const HistoryPageWrapper = styled.div`
  background-color: #F2F2F2;
  margin-top: 70px;
  width: 100vw;
  min-height: calc(100vh - 70px);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export const PageContent = styled.div`
  width: calc(min(600px, 100vw) - 34px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 160px;

  h1 {
    margin-top: 28px;
    margin-bottom: 17px;
    width: 100%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    opacity: 0;
    animation: ${fadeInAnimation} 0.7s forwards;
  }
  p {
    width: 100%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;

export const CalendarWrapper = styled.div`
  margin-top: 11px;
  border-radius: 10px;
  overflow: hidden;
  opacity: 0;
  animation: ${fadeInAnimation} 0.7s 0.4s forwards;

  div {
    border: none;
  }
  .react-calendar__tile--range {
    background-color: #FFFF81;
    color: black;
  }

  .react-calendar__tile.react-calendar__month-view__days__day.success-habits {
    display: flex;
    justify-content: center;
    align-items: center;
    abbr {
      background-color: #8CC654;
      border-radius: 50%;
      box-sizing: border-box;
      position: relative;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
  }
  .react-calendar__tile.react-calendar__month-view__days__day.failed-habits {
    display: flex;
    justify-content: center;
    align-items: center;
    abbr {
      background-color: #EA5766;
      border-radius: 50%;
      box-sizing: border-box;
      position: relative;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }


`;