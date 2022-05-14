import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { Layout } from '../../components/layout'
import { Pokemon } from '../../interfaces';
import pokeapi from '../../api/pokeApi';



interface Props{
   pokemon: Pokemon;
}

const PokemonPage: FC<Props> = ({ pokemon }) => {

  const { name, id} = pokemon;

    const router = useRouter();
    console.log(router.query)

    const volver = ()=>{
      router.back();
    }

  return (
    <Layout title='Algun pokemon'>
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
                  ghost
                >
                  Guardar en favoritos
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
    
    </Layout>
  )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map( (value, index) => `${ index + 1 }`)

  console.log({pokemons151})


  return {

    paths: pokemons151.map( id =>({ params: {id }}))
    ,
    fallback: false
  
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  

  const { id } = params as { id: string}

  const  { data } = await pokeapi.get<Pokemon>(`/pokemon/${ id }`);
    

  return {
    props: {
        pokemon: data
    }
  }
}




export default PokemonPage