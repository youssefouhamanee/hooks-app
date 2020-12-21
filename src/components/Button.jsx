import React from "react";
import { ButtonWrapper } from "./StyledComponents";
const Button = ({ addPersons }) => {
	return (
		<div>
			<ButtonWrapper onClick={() => addPersons()}>Submit</ButtonWrapper>
		</div>
	);
};
export default Button;
