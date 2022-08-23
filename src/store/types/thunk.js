import { getType, getTypes } from "../../api/types";
import { getTypeAction, getTypesAction } from "./actionCreators";

export function getTypesThunk(request = '') {
    return (dispatch, getState) => {
        getTypes(request)
        .then((types) => dispatch(getTypesAction(types)))
        .catch((error) => {
            alert('Something went wrong! Try again later.');
            console.error(error);
        });
    }
}

export function getTypeThunk(typeId) {
    return (dispatch, getState) => {
        getType(typeId)
        .then((type) => dispatch(getTypeAction(type)))
        .catch((error) => {
            alert('Something went wrong! Try again later.');
            console.error(error);
        });
    }
}

