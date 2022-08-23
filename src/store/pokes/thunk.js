import { getPoke, getPokes } from "../../api/poke";
import { getPokesAction, getPokeAction } from "./actionCreators";

export function getPokesThunk(request = '?limit=10&offset=0') {
    return (dispatch, getState) => {
        getPokes(request)
        .then((pokes) => dispatch(getPokesAction(pokes)))
        .catch((error) => {
            alert('Something went wrong! Try again later.');
            console.error(error);
        });
    }
}

export function getPokeThunk(pokeId) {
    return (dispatch, getState) => {
        getPoke(pokeId)
        .then((poke) => dispatch(getPokeAction(poke)))
        .catch((error) => {
            alert('Something went wrong! Try again later.');
            console.error(error);
        });
    }
}


export function searchPokesThunk(request, searchValue) {
    return (dispatch, getState) => {
        getPokes(request)
        .then((pokes) => {
            pokes.results = pokes.results.filter((poke) => poke.name.includes(searchValue));
            dispatch(getPokesAction(pokes));
        })
        .catch((error) => {
            alert('Something went wrong! Try again later.');
            console.error(error);
        });
    }
}