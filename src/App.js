import React, { useState, useRef, useSelector } from "react";
import { v4 as uuid } from "uuid";
import { AppContent, AppWrapper, AppForm } from "./styled";
import Button from "./components/Button";
import Input from "./components/Input";
import ModalRemoveConfirmation from "./components/ModalRemoveConfirmation";

function App() {
	const [persons, setPersons] = useState([]);
	const [namePerson, setNamePerson] = useState("");
	const [removePersonId, setRemovePersonId] = useState("");
	const [errors, setErrors] = useState("");
	const [displayModalRemove, setDisplayModalRemove] = useState(false);
	const remModal = useRef();
	const handlePersons = (e) => {
		return setNamePerson(e.target.value);
	};
	const addPersons = () => {
		if (namePerson !== "") {
			setPersons([...persons, { id: uuid(), name: namePerson }]);
			setErrors("");
		} else {
			setErrors("please this fileds not should be empty!");
		}
		setNamePerson("");
	};
	const removePerson = () => {
		const newListPersons = persons.filter((p) => {
			return p.id !== removePersonId.id;
		});
		setPersons(newListPersons);
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
	const statePerson = (state) => useS;
	console.log(persons);
	return (
		<>
			<AppWrapper>
				<AppForm>
					<Input
						valueInput={namePerson}
						onAddPersons={handlePersons}
						setPersons={setPersons}
						error={errors}
					/>

					<Button addPersons={addPersons} />
				</AppForm>
				<AppContent>
					{persons.length > 0 &&
						persons.map((p) => (
							<ul>
								<li key={p.id}>
									{p.name}{" "}
									<span
										className="icon-close"
										onClick={() => {
											setRemovePersonId({ id: p.id, name: p.name });
											setDisplayModalRemove(true);
										}}
									>
										&times;
									</span>
								</li>
							</ul>
						))}
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
		</>
	);
}

export default App;
