import { GET_POKES, GET_POKE} from "./actionTypes";

export function getPokesAction(pokes) {
    return {
        type: GET_POKES,
        payload: pokes
    }
}
export function getPokeAction(poke) {
    return {
        type: GET_POKE,
        payload: poke
    }
}
