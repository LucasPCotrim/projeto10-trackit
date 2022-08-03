import styled from 'styled-components';

export const HabitsPageWrapper = styled.div`
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

  p {
    margin-top: 8px;
    width: 100%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;

export const TopMenu = styled.div`
  width: 100%;
  height: 69px;
  margin-top: 6px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

  h1 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
  }

  button {
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
  }
`;


export const HabitsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 29px;
`;


export const HabitCreationCardWrapper = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 180px;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 18px;

  input[type=text] {
    width: 100%;
    height: 45px;
    padding-left: 11px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    outline: none;
    margin-bottom: 8px;

    &::placeholder {
			font-size: 19.976px;
			line-height: 25px;
			color: #DBDBDB;
		}
		&:focus::placeholder {
			color: transparent;
		}
		&:disabled {
			background-color: #F2F2F2;
			color: #AFAFAF;
		}
  }
`;

export const WeekdaysCheckboxes = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  label {
    cursor: pointer;

    input[type=checkbox]{
      display: none;
    }

    span {
      position: relative;
      display: inline-block;
      background-color: #FFFFFF;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #D5D5D5;
      border-radius: 5px;
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      color: #DBDBDB;
      transition: 0.5s;
      user-select: none;
      overflow: hidden;
    }

    input[type=checkbox]:checked ~ span {
      background-color: #CFCFCF;
      color: #FFFFFF;
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 29px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;

  button {
    cursor: pointer;
  }

  button:nth-child(1) {
    background-color: #FFFFFF;
    height: 100%;
    padding: 0 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
  }
  button:nth-child(2) {
    background-color: #52B6FF;
    height: 100%;
    padding: 0 17px;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
  }
`;

export const HabitCardWrapper = styled.div`
  position: relative;
  margin: 5px 0;
  padding: 15px;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 13px;

  h2 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 8px;
  }

  img {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 13px;
    height: 15px;
    cursor: pointer;
  }

  ${WeekdaysCheckboxes} {
    margin-bottom: 2px;
    label {
      pointer-events: none;
    }
  }
`;