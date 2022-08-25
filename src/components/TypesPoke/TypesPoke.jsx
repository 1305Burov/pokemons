import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { typesSelector } from '../../store/types/selectors';
import { getTypeThunk } from '../../store/types/thunk';
import { PokeLink } from '../PokeLink/PokeLink';

export const TypesPoke = () => {
    const dispatch = useDispatch();
    const types = useSelector(typesSelector); 
    const { typeId } = useParams();
    const navigate = useNavigate();
    const pokesList = types.pokemon ? types.pokemon : [];
    
    useEffect(() => {
        dispatch(getTypeThunk(typeId));
    }, []);

    if (!types.name) {
        return <h2>Loading...</h2>
    }

    return (
        <section className='section'>
            <button onClick={() => navigate(-1)} className="button button_prev"></button>
            <div className="pokes">
                <ul className="pokes__list">
                    {pokesList.map((poke, index) => {
                        return <li key={index} ><PokeLink poke={poke.pokemon} /></li>
                    })}
                </ul>
            </div>
        </section>
    );
}

