import axios from 'axios';

const baseApiUrl = 'https://pokeapi.co/api/v2/';
const pokoEndpoint = 'pokemon/';

const service = {
    async getPokemonsData(path) {
        try {
            let data = null
            if (path) {
                data = await axios.get(`${path}`);
            } else {
                data = await axios.get(`${baseApiUrl}${pokoEndpoint}`);
            }
            return data.data;
        } catch (error) {
            throw new Error('Ошибка');
        }
    },
};

export default service;
