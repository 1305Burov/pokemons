import { Search } from "../Search/Search";
import { GetPokies } from "../GetPokies/GetPokies";
import { GetTypes } from "../GetTypes/GetTypes";

export const RenderMainPage = () => {

    return (
        <>
            <Search />
            <GetTypes/>
            <GetPokies/>
        </>
    );
}

