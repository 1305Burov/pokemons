import { Route, Routes } from "react-router-dom";
import { PokeCard } from "./components/PokeCard/PokeCard";
import { RenderMainPage } from "./components/RenderMainPage/RenderMainPage";
import { TypesPoke } from "./components/TypesPoke/TypesPoke";

export function App() {
    return (

        <Routes>
            <Route path="/" element={ <RenderMainPage /> } />
            <Route path="/pokemon/:pokemonId" element={ <PokeCard /> } />
            <Route path="/type/:typeId" element={ <TypesPoke /> } />
        </Routes>
        
    );
}

