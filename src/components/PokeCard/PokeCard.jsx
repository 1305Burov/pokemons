import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { pokesSelector } from "../../store/pokes/selectors";
import { getPokeThunk } from "../../store/pokes/thunk";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


import { EffectCards } from "swiper";

export const PokeCard = () => {
    const dispatch = useDispatch();
    const poke = useSelector(pokesSelector); 
    const { pokemonId } = useParams();
    const navigate = useNavigate();
    
    console.log(poke);

    useEffect(() => {
        dispatch(getPokeThunk(pokemonId));
    }, [dispatch]);

    if (!poke.name) {
        return <h2>Loading...</h2>
    }

    return (
        <section className="section pokeCard">
            <button className="button button_prev" onClick={() => navigate(-1)}></button>
            <div className="pokeCard__wrapper">
                <div className="pokeCard__images">
                    {poke.sprites.front_default && <img src={poke.sprites.front_default} alt="default"  />}
                    {poke.sprites.other.dream_world.front_default && <img src={poke.sprites.other.dream_world.front_default} alt="dream_world" className="pokeCard__image" />}
                </div>
                <h2 className="pokeCard__name">{poke.name}</h2>
                <div className="pokeCard__stats stats">
                    {poke.stats.map((stat, index) => {
                        return <div className="stats__stat stat">
                            <span className="stat__name">{stat.stat.name}</span>
                            <span className="stat__value">{stat.base_stat}</span>
                        </div>
                    })}
                </div>
                <div className="pokeCard__moves moves">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >   
                        <div>
                            {poke.moves.map((move, index) => {
                                return <SwiperSlide><span className="stat__name">{move.move.name}</span></SwiperSlide>
                            })}
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

 
