import { colors } from "./config/colors";
import styled from "styled-components";

export const AppWrapper = styled.div`
	margin-left: 50px;
	margin-right: 50px;
	padding: 15px;
	.rodal-dialog {
		padding: 0 !important;
	}
`;
export const AppContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	ul li span.icon-close {
		color: ${colors.dangerColor};
		cursor: pointer;
	}
`;
export const AppForm = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 25%;
	.error-field {
		color: red;
		font-weight: 300;
		font-size: 13px;
	}
`;
