import styled from 'styled-components';


export const LoginPageWrapper = styled.div`

  width: min(600px, 100vw);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding-top: 68px;

	img {
		width: min(180px, calc(100vw - 10px));
		height: calc(0.991 * min(180px, calc(100vw - 10px)));
		margin-bottom: 32.62px;
	}

`;


export const Form = styled.form`
	width: min(303px, calc(100% - 72px));
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 6px;
	margin-bottom: 25px;

	input {
		width: 100%;
		height: 45px;
		background-color: #FFFFFF;
		border: 1px solid #D5D5D5;
		border-radius: 5px;
		font-size: 19.976px;
		line-height: 25px;
		padding-left: 11px;
		color: #5e5d5d;
		outline: none;

		&::placeholder {
			font-size: 19.976px;
			line-height: 25px;
			color: #DBDBDB;
		}
		&:focus::placeholder {
			color: transparent;
		}
	}

	button {
		width: 100%;
		height: 45px;
		left: 36px;
		top: 381px;
		background-color: #52B6FF;
		border: none;
		border-radius: 4.64px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		h2 {
			font-family: 'Lexend Deca';
			font-size: 20.976px;
			line-height: 26px;
			color: #FFFFFF;
		}
	}
`;


export const SignUpLink = styled.div`
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 13.976px;
	line-height: 17px;
	text-align: center;
	text-decoration-line: underline;
	color: #52B6FF;
	margin-bottom: 100px;
	cursor: pointer;
`;