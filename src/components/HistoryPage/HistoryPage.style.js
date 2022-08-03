import styled from 'styled-components';

export const HistoryPageWrapper = styled.div`
  background-color: #E5E5E5;
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