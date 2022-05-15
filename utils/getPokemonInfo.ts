import pokeapi from "../api/pokeApi";
import { Pokemon } from "../interfaces";


const getPokemonInfo = async (  nameOrId : string ) => {

   const  { data } = await pokeapi.get<Pokemon>(`/pokemon/${ nameOrId }`);


   return {
     id: data.id,
     name: data.name,
     sprites: data.sprites
   }

}


export default {
    getPokemonInfo
}