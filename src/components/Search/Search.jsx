import { useDispatch } from "react-redux";
import { searchPokesThunk } from "../../store/pokes/thunk";

export const Search = () => {
    const dispatch = useDispatch();

    function search(e) {
        e.preventDefault();
        dispatch(searchPokesThunk('?limit=100000&offset=0', e.target.search.value));
    }

    return (
        <form onSubmit={search} className='search'>
            <input type="search" name='search' className="search__input" />
            <button type="submit" className="search__button"></button>
        </form>
    );
}


