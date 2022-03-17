import { action, makeObservable, observable } from 'mobx';

import service from './charactersStore.service';

class CharactersStore {

  pokemonList = []
  isLoading = false
  error = null
  path = ''

  constructor() {
    makeObservable(this,{
      pokemonList: observable,
      isLoading: observable,
      error: observable,
      path: observable,
      getPokemon: action.bound,
      getNextPokemon: action.bound
    });
    this.getPokemon()
  }
  async getPokemon() {
    try {
      this.isLoading = true
      const result = await service.getPokemonsData()
      this.pokemonList = [...result.results]
      this.path = result.next
    }
      catch (error) {
        this.error = error.message
    }
    finally {
      this.isLoading = false
    }
  }

  async getNextPokemon() {
    try {
      this.isLoading = true
      const result = await service.getPokemonsData(this.path)
      console.log(result);
      this.pokemonList = [...result]
      console.log(this.pokemonList);
    }
    catch (error) {
      this.error = error.message
    }
    finally {
      this.isLoading = false
    }
  }
}

export default new CharactersStore();
