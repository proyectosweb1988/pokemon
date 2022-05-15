import React, { FC, useEffect, useState } from 'react'

import { GetStaticProps, GetStaticPaths } from 'next'
import { Grid, Card, Button, Container, Image, Text } from '@nextui-org/react'
import { Layout } from '../../components/layout'
import { useRouter } from 'next/router'
import confetti from 'canvas-confetti'
import { getinfo, util } from '../../utils'
import pokeapi from '../../api/pokeApi'
import { Pokemon, PokemonListResponse } from '../../interfaces'


interface Props{

    pokemon: Pokemon

}

const PokmonByNamePage: FC <Props> = ( {pokemon} ) => {

    const { name, id} = pokemon;
  
    const [isFavorites, setIsFavorites] = useState( false )
  
       useEffect(()=>{
          setIsFavorites( util.existInFavorites(pokemon.id) )
       },[pokemon.id])
  
      const router = useRouter();
      const volver = ()=>{ router.back();}
  
      const onToggleFavirite = ( )=>{   
      util.toggleFavorite( id )
      setIsFavorites(!isFavorites)
  
      if( isFavorites ) return;
  
      var end = Date.now() + (1 * 1000);
      var colors = ['#bb0000', '#ffffff'];
      var end = Date.now() + (1 * 1000);
  
      // go Buckeyes!
      var colors = ['#bb0000', '#ffffff'];
      
      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });
      
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
  
    }

  return (
    <Layout title={`${pokemon.name}`} >
     <Grid.Container css={{ marginTop:'5px'}} gap={ 2 }>
          <Grid xs={ 12 } sm={ 4 }>
            <Card hoverable css={{ padding: '30px'}}>
              <Card.Body>
                <Card.Image
                  src={ pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                  alt={pokemon.name}
                  width="100%"
                  height={ 200 }
                />
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={ 12 } sm={ 8 }>
            <Card>
              <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text h1 transform='capitalize'> {  pokemon.name }</Text>
                <Button
                  color="gradient"
                  ghost={ !isFavorites }
                  onClick={ onToggleFavirite }
                >
                  { isFavorites ? 'En favoritos' : 'Guardar en favoritos' }
                </Button>
              </Card.Header>
              <Card.Body>
                <text></text>
                <Container display='flex' direction='row'>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    height={ 100}
                    width={ 100 }
                  /> 
                       <Image
                     src={pokemon.sprites.back_default}
                     alt={pokemon.name}
                     height={ 100}
                     width={ 100 }
                  /> 
                       <Image
                      src={pokemon.sprites.front_shiny}
                      alt={pokemon.name}
                      height={ 100}
                      width={ 100 }
                  /> 
                       <Image
                       src={pokemon.sprites.back_shiny}
                       alt={pokemon.name}
                       height={ 100}
                       width={ 100 }
                  /> 
                </Container>

              </Card.Body>
            </Card>
          </Grid>

        </Grid.Container>

        <Button
          color='gradient'
          ghost
          onClick={ volver }
        >
          Back 
        </Button>
    

    </Layout>
  )
}

//You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
        
    const { data } = await pokeapi.get<PokemonListResponse>(`/pokemon?limit=151`)
    
    
    const pokemonName: string[] = data.results.map( pokemon =>
        pokemon.name
    )


    
    
    return {

        paths: pokemonName.map( name =>(
            {
                params:{
                    name
                }
            }
        )),
        // paths: [
        //     {
        //         params: {
        //             name: 'ditto'
        //         }
        //     }
        // ],
        fallback: false
    }
}
export const getStaticProps: GetStaticProps = async ({params}) => {
    // const { data } = await  pokeapi.get(`/pokemon/${ name }`);
     const { name } = params as {name:string};

  

    return {
        props: {      
            pokemon :await getinfo.getPokemonInfo( name) 
            
        }
    }
}
export default PokmonByNamePage