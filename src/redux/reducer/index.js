import * as types from "../actions/types";

const initialState = {
	personsList: [],
	personSelected: {},
	selectedId: ""
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
			// const newListPerson =
			return {
				...state,
				personsList: state.personsList.filter((p) => {
					return p.id !== action.payload;
				})
			};
		case types.GET_TODO_COMPLETED:
			return {
				...state,
				personsList: state.personsList.map((p) => {
					if (p.id === action.payload.id) {
						return {
							...p,
							completed: !p.completed
						};
					}
					return p;
				})
			};
		default:
			return state;
	}
}
