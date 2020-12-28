import { createSelector } from "reselect";
// import _get from "lodash/get";

// const getPersonsList = (state) => state?.personsList;
// const getPersonsList = (state) => _get(state, "personsList");
export const selectorPersons = createSelector(
	(state) => state,
	(personsList) => personsList
);
