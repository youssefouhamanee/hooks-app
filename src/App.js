import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { AppContent, AppWrapper, AppForm } from "./styled";
import Button from "./components/Button";
import Input from "./components/Input";
import Contents from "./components/Contents";
import ModalRemoveConfirmation from "./components/ModalRemoveConfirmation";
import {
	addPersonFn,
	fetchPersonFn,
	removePersonFn,
	setNamePerson
} from "./redux/actions";
import { selectorPersons } from "./redux/selector";
import { GET_TODOS_LIST } from "end-points";

function App() {
	const { persons, namePerson } = useSelector(selectorPersons);

	const [removePersonId, setRemovePersonId] = useState("");
	const [errors, setErrors] = useState("");
	const [displayModalRemove, setDisplayModalRemove] = useState(false);
	const remModal = useRef();

	const dispatch = useDispatch();
	const fetchPersons = () => {
		return axios
			.get(GET_TODOS_LIST)
			.then((res) => dispatch(fetchPersonFn(res.data.slice(0, 10))));
	};
	useEffect(() => {
		fetchPersons();
	}, []);

	const handlePersons = (e) => {
		return dispatch(setNamePerson(e.target.value));
	};
	const addPersons = () => {
		if (namePerson !== "") {
			const newPerson = { id: uuid(), name: namePerson };
			dispatch(addPersonFn(newPerson));
			setErrors("");
		} else {
			setErrors("please this field not should be empty!");
		}
		dispatch(setNamePerson(""));
	};
	const removePerson = () => {
		dispatch(removePersonFn(removePersonId));
		setDisplayModalRemove(false);
	};

	const handleClick = () => {
		if (!displayModalRemove) {
			document.addEventListener("click", handleOutsideClick, false);
		} else {
			document.removeEventListener("click", handleOutsideClick, false);
		}

		setDisplayModalRemove(!displayModalRemove);
	};

	const handleOutsideClick = (e) => {
		return !remModal.contains(e.target) && handleClick();
	};

	return (
		<AppWrapper>
			<AppForm>
				<Input
					valueInput={namePerson}
					onAddPersons={handlePersons}
					error={errors}
				/>
				<Button addPersons={addPersons} />
			</AppForm>
			<AppContent>
				<Contents
					persons={persons}
					setRemovePersonId={setRemovePersonId}
					setDisplayModalRemove={setDisplayModalRemove}
				/>
			</AppContent>
			{displayModalRemove && (
				<ModalRemoveConfirmation
					isVisible={displayModalRemove}
					onClose={() => setDisplayModalRemove(false)}
					removePerson={removePerson}
					removePersonId={removePersonId}
					animation={"flip"}
					remModal={remModal}
				/>
			)}
		</AppWrapper>
	);
}

export default App;
