import * as types from "../actions/types";

const initialState = {
	namePerson: ""
};

export default function namePersonReduce(state = initialState, action) {
	switch (action.type) {
		case types.GET_PERSON_NAME:
			return {
				...state,
				namePerson: action.payload
			};
		default:
			return state;
	}
}
