import { GET_POKES, GET_POKE} from "./actionTypes";

const initialState = [];

export function pokesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKES:
            return action.payload;
        case GET_POKE:
            return action.payload;
        
        default:
            return state;
    }
}

 