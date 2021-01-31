import { createSelector } from "reselect";
// import _get from "lodash/get";

// const getPersonsList = (state) => state?.personsList;
// const getPersonsList = (state) => _get(state, "personsList");
export const selectorPersons = createSelector(
	(state) => state.personReducer,
	(state) => state.nameReducer,
	(personsListState, nameState) => {
		return {
			persons: personsListState?.personsList,
			namePerson: nameState?.namePerson
		};
	}
);
