import React from 'react'
import PokemonList from '../../PokemonList/PokemonList';
import classes from './Home.module.scss'

const Home = () => (
    <main className={classes.component}>
        <div className={classes.searchInput} />
        <div className={classes.content}>
            <PokemonList/>
        </div>
    </main>
);

export default Home;