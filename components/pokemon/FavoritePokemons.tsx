import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoritesCardPokemon } from './FavoritesCardPokemon'


interface Props{
    Favoritos: number[]
    setFavoritos: any
}

export const FavoritePokemons: FC <Props>= ({ Favoritos, setFavoritos }) => {
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
    {
            Favoritos.map( pokemonId =>(
                <FavoritesCardPokemon pokemonId={  pokemonId}  key={ pokemonId } setFavoritos={ setFavoritos }/>
            ))
    }
   </Grid.Container>
  )
}
