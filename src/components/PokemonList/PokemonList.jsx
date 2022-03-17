import React, {useState} from 'react'
import {observer} from "mobx-react-lite";
import charactersStore from "../../stores/charactersStore";
import Preloader from "../common/PreLoader/Preloader";
import {Button} from "antd";

const PokemonList = observer(() => {
    const [isShowBtn, setIsShowBtn] = useState(true);
    const { pokemonList , getNextPokemon } = charactersStore
    const handleClick = () => {
         getNextPokemon();
    };
    const CharactersList = pokemonList.map(el => (
        <div>
            {charactersStore.isLoading
            ? <Preloader />
            : el.name}
        </div>
    ))
    return (
        <div>
            {CharactersList}
            {
                isShowBtn && <Button style={{ background: '#2eb96c' }} onClick={handleClick}>Показать ещё</Button>
            }
        </div>
    );
});

export default PokemonList;