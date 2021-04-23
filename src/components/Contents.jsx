import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorPersons } from "redux/selector";
import { getCompletedTodo } from "../redux/actions";
import { ContentWrapper } from "./StyledComponents";
const Contents = ({ persons, setRemovePersonId, setDisplayModalRemove }) => {
	const dispatch = useDispatch();
	const { taskCompleted, taskUncompleted } = useSelector(selectorPersons);
	const handleChangeCompleted = (id) => {
		dispatch(getCompletedTodo(id));
	};
	return (
		<ContentWrapper>
			<div>
				<strong>all tasks :</strong> ({persons.length}) |{" "}
				<strong>task completed :</strong> ({taskCompleted}) |{" "}
				<strong>task uncompleted :</strong> ({taskUncompleted}){" "}
			</div>
			{persons?.length > 0 &&
				persons.map((p) => (
					<ul>
						<li key={p.id}>
							<input
								type="checkbox"
								checked={p.completed}
								onChange={(e) => handleChangeCompleted(p.id)}
							/>
							{p.title}{" "}
							<span
								className="icon-close"
								onClick={() => {
									setRemovePersonId(p.id);
									setDisplayModalRemove(true);
								}}
							>
								&times;
							</span>
						</li>
					</ul>
				))}
		</ContentWrapper>
	);
};
export default Contents;
