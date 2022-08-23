import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { typesSelector } from '../../store/types/selectors';
import { getTypeThunk } from '../../store/types/thunk';

export const TypesPoke = () => {
    const dispatch = useDispatch();
    const types = useSelector(typesSelector); 
    const { typeId } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(getTypeThunk(typeId));
    }, []);

    console.log(types);

    if (!types.name) {
        return <h2>Loading...</h2>
    }

    return (
        <section>
            <button onClick={() => navigate(-1)}>Назад</button>
            <div>
                {types.name}
            </div>
        </section>
    );
}

