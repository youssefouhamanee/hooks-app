import styled from "styled-components";
import { colors } from "../config/colors";

export const ButtonWrapper = styled.button`
	background-color: ${colors.primaryColor};
	color: ${colors.whiteColor};
	border: 1px solid ${colors.primaryColor};
	padding: 10px;
	border-radius: 2px;
	font-size: 13px;
	font-weight: 600;
	cursor: pointer;
	&:hover {
		background-color: ${colors.whiteColor};
		color: ${colors.primaryColor};
	}
`;
export const InputWrapper = styled.input`
	border-radius: 2px;
	border: none;
	outline: 0;
	border: 1px solid ${colors.primaryColor};
	width: 200px;
	padding: 10px 10px 10px 13px;
`;
export const ContentModal = styled.div`
	display: flex;
	flex-direction: column;
	.header__modal {
		background-color: red;
		color: ${colors.whiteColor};
		font-weight: 500;
		font-size: 14px;
		padding: 50px 30px;
	}
	.footer__modal {
		display: flex;
		flex-direction: row;
		justify-content: end;
		margin-top: 5px;
		.btn-outline {
			background-color: ${colors.whiteColor};
			color: ${colors.anchorColor};
			border: 1px solid ${colors.anchorColor};
			padding: 5px;
			border-radius: 2px;
			font-size: 13px;
			font-weight: 600;
			cursor: pointer;
			text-transform: capitalize;
			margin-right: 5px;
			&:hover {
				background-color: ${colors.anchorColor};
				color: ${colors.whiteColor};
			}
		}
		.btn-danger {
			background-color: red;
			color: ${colors.whiteColor};
			border: 1px solid red;
			padding: 5px;
			border-radius: 2px;
			font-size: 13px;
			font-weight: 600;
			cursor: pointer;
			margin-right: 5px;
			text-transform: capitalize;
		}
	}
`;
