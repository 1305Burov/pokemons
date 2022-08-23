import { Link } from 'react-router-dom';

export const TypeLink = ({type}) => {
    const path = type.url.slice(type.url.lastIndexOf('type/'), type.url.length - 1);
    
    return (
        <Link className={`types__link ${type.name}`} to={`/${path}`}>
            {type.name}
        </Link>
    );
}

