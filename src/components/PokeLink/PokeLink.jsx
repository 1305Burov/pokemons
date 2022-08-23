import { Link } from 'react-router-dom';

export const PokeLink = ({poke}) => {
    const path = poke.url.slice(poke.url.lastIndexOf('pokemon/'), poke.url.length - 1);
    
    return (
        <Link className='pokes__link' to={`/${path}`}>
            {poke.name}
        </Link>
    );
}

