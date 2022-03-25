import {action, makeObservable, observable} from 'mobx';

import service from './charactersStore.service';

class CharactersStore {

    pokemonList = []
    isLoading = false
    error = null
    path = ''

    constructor() {
        makeObservable(this, {
            pokemonList: observable,
            isLoading: observable,
            error: observable,
            path: observable,
            getPokemonAll: action.bound,
            getNextPokemon: action.bound
        });
        this.getPokemonAll()
    }

    async getPokemonAll() {
        try {
            this.isLoading = true
            while (this.path != null){
                const result = await service.getPokemonsData(this.path)
                if (result.next != null) {
                    this.path = result.next
                    this.pokemonList = [...result.results]
                } else {
                    this.path = null
                }
            }
        } catch (error) {
            this.error = error.message
        } finally {
            this.isLoading = false
        }
    }

    async getNextPokemon() {
        try {
            this.isLoading = true
            const result = await service.getPokemonsData(this.path)
            this.path = result.next
            this.pokemonList = [...this.pokemonList, ...result.results]
        } catch (error) {
            this.error = error.message
        } finally {
            this.isLoading = false
        }
    }
}

export default new CharactersStore();
