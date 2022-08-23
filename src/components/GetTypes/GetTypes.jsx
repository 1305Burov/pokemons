import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { typesSelector } from "../../store/types/selectors";
import { getTypesThunk } from "../../store/types/thunk";
import { TypeLink } from "../TypeLink/TypeLink";


export const GetTypes = () => {
    const dispatch = useDispatch();
    const types = useSelector(typesSelector); 
    const typesList = types.results ? types.results : [];
    
    useEffect(() => {
        dispatch(getTypesThunk());
    }, []);

    
    return (
        <ul className="types__list list">
            {typesList.map((type, index) => {
                return <li key={index} className='list__item' ><TypeLink type={type} /></li>
            })}
        </ul>
    );
}

