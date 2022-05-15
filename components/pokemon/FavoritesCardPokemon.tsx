import React, { FC } from 'react'
import { Grid, Card, Button } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { util } from '../../utils'

interface Props{
    pokemonId: number
    setFavoritos: any
}

export const FavoritesCardPokemon: FC<Props> = ({ pokemonId , setFavoritos})=> {

  const router = useRouter();

  const verMas = (id: number)=>{
    router.push(`/pokemon/${ id }`)
}

const quitarFavorito = (id: number)=>{

  util.toggleFavorite(id)

  setFavoritos( util.pokemon);
    
}

  return (
    
    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ pokemonId  } >
    <Card hoverable clickable css={{ padding: 10}}> 


      <Card.Body>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        width={ '100%' }
        height={ 140 }
      />
    
      </Card.Body>


      <Card.Footer css={{rubyAlign: 'center', display:'flex', justifyContent:'center', flexDirection: 'column'}}>
        <Button color='gradient'
                ghost
                onClick={ ()=>verMas(pokemonId) }
        >Ver</Button>

         <Button color='error'
                ghost
                onClick={ ()=> quitarFavorito(pokemonId)}
        >Elimnar</Button>
      </Card.Footer> 
    </Card>
  </Grid>
    
  )
}
