import React from "react";

const Contents = ({ persons, setRemovePersonId, setDisplayModalRemove }) => {
	return (
		<>
			{persons?.length > 0 &&
				persons.map((p) => (
					<ul>
						<li key={p.id}>
							{p.name}{" "}
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
		</>
	);
};
export default Contents;
