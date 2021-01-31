import * as types from "./types";

export const addPersonFn = (data) => {
	return {
		type: types.ADD_PERSON,
		payload: data
	};
};

export const fetchPersonFn = (data) => {
	return {
		type: types.FETCH_PERSONS,
		payload: data
	};
};

export const removePersonFn = (data) => {
	return {
		type: types.REMOVE_PERSON,
		payload: data
	};
};

export const setNamePerson = (name) => {
	return {
		type: types.GET_PERSON_NAME,
		payload: name
	};
};
