// @ts-nocheck
import styled from 'styled-components';

export const TodayPageWrapper = styled.div`
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
    width: 100%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
  }
  h2 {
    margin-bottom: 28px;
    width: 100%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${props => (props.percentCompleted > 0) ? '#8FC549' : '#BABABA'};
  }
`;

export const HabitContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const HabitWrapper = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  height: 94px;
  border-radius: 5px;
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HabitInfo = styled.div`
  h3 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
  }
  h4, h5 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
  }
  h4 {
    color: ${props => props.greenCurrent ? '#8FC549' : '#666666'};
  }
  h5 {
    color: ${props => props.greenHighest ? '#8FC549' : '#666666'};
  }
`;

export const HabitStatus = styled.div`
  width: 69px;
  height: 69px;
  background-color: ${props => props.completed ? '#8FC549' : '#EBEBEB'};
  border: 1px solid #E7E7E7;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;