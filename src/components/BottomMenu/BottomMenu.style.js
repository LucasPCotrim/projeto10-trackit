import styled from "styled-components";

export const BottomMenuWrapper = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 70px;
  background-color: #FFFFFF;
  padding: 0 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: min(161px, calc(0.33 * 100vw));

  h2 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
  }
`;