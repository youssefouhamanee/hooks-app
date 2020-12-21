import * as types from "../actions/types";
	
const initialeState = {
	name: ""
};

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case types.ADD_PERSON:
			return console.log("add_person");
		default:
			return state;
	}
}
