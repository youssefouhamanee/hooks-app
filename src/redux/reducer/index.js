import * as types from "../actions/types";

const initialState = {
	personsList: []
};

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case types.ADD_PERSON:
			return {
				...state,
				personsList: [...state.personsList, { ...action.payload }]
			};

		case types.FETCH_PERSONS:
			return {
				...state,
				personsList: action.payload
			};
		case types.REMOVE_PERSON:
			const newListPerson = state.personsList.filter((p) => {
				return p.id !== action.payload;
			});
			return {
				...state,
				personsList: newListPerson
			};

		default:
			return state;
	}
}
