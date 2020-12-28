import React from "react";
import { InputWrapper } from "./StyledComponents";
const Input = ({ onAddPersons, valueInput, error }) => {
	return (
		<div>
			<InputWrapper
				type="text"
				value={valueInput}
				onChange={onAddPersons}
				placeholder="type anything ..."
			/>
			<div className="error-field">{error}</div>
		</div>
	);
};

export default Input;
