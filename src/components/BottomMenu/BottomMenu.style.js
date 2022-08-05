import styled from "styled-components";

export const BottomMenuWrapper = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: min(70px, calc(0.2121 * 100vw));
  background-color: #FFFFFF;
  padding: 0 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: min(131px, calc(0.24 * 100vw));  
`;

export const Button = styled.button`
  background-color: #FFFFFF;
  height: 80%;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  font-size: min(17.976px, calc(0.05447 * 100vw));
  line-height: min(22px, calc(0.06667 * 100vw));
  text-align: center;
  color: #52B6FF;
  cursor: pointer;
`;

export const ProgressBarContainer = styled.div`
  position: fixed;
  bottom: 10px;
  left: calc(50% - calc(0.5 * min(91px, calc(0.2757 * 100vw))));
  width: min(91px, calc(0.2757 * 100vw));
  height: min(91px, calc(0.2757 * 100vw));
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
`;