import React from "react";
import { ContentWrapper } from "./StyledComponents";
const Contents = ({ persons, setRemovePersonId, setDisplayModalRemove }) => {
	return (
		<ContentWrapper>
			{persons?.length > 0 &&
				persons.map((p) => (
					<ul>
						<li key={p.id}>
							<input type="checkbox" />
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
		</ContentWrapper>
	);
};
export default Contents;
