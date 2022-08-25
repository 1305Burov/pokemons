import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokeLink } from "../PokeLink/PokeLink";
import { pokesSelector } from "../../store/pokes/selectors";
import { getPokesThunk } from "../../store/pokes/thunk";

export const GetPokies = () => {
    const dispatch = useDispatch();
    const pokes = useSelector(pokesSelector); 
    const pokesList = pokes.results ? pokes.results : [];

    useEffect(() => {
        dispatch(getPokesThunk());
    }, []);

    function next() {
        if (pokes.next) {
            dispatch(getPokesThunk(pokes.next.slice(pokes.next.indexOf('?'))));
        }
    }

    function prev() {
        if (pokes.previous) {
            dispatch(getPokesThunk(pokes.previous.slice(pokes.previous.indexOf('?'))));
        }
    }

    return (
        <div className="pokes">
            {pokes.previous && <button onClick={prev} className='button button_prev'></button>}    
            <ul className="pokes__list">
                {pokesList.map((poke, index) => {
                    return <li key={index} ><PokeLink poke={poke} /></li>
                })}
            </ul>
            {pokes.next && <button onClick={next} className='button button_next'></button>}
        </div>
    );
}

 
