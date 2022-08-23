import { GET_TYPES, GET_TYPE } from "./actionTypes";

export function getTypesAction(types) {
    return {
        type: GET_TYPES,
        payload: types
    }
}

export function getTypeAction(type) {
    return {
        type: GET_TYPE,
        payload: type
    }
}
