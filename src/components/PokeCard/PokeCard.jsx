import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { pokesSelector } from "../../store/pokes/selectors";
import { getPokeThunk } from "../../store/pokes/thunk";

export const PokeCard = () => {
    const dispatch = useDispatch();
    const poke = useSelector(pokesSelector); 
    const { pokemonId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getPokeThunk(pokemonId));
    }, []);

    if (!poke.name) {
        return <h2>Loading...</h2>
    }

    return (
        <section>
            <button onClick={() => navigate(-1)}>Назад</button>
            <div>
                {poke.name}
            </div>
        </section>
    );
}

 
