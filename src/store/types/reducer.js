import { GET_TYPES, GET_TYPE } from "./actionTypes";

const initialState = [];

export function typesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TYPES:
            return action.payload;
        case GET_TYPE:
            return action.payload;
            
        default:
            return state;
    }
}

 