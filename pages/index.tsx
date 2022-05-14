import { NextPage ,GetStaticProps} from 'next'
import { Button, Card, Grid, Row, Text } from '@nextui-org/react'
import pokeapi from '../api/pokeApi'
import { Layout } from '../components/layout'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonCard } from '../components/pokemon';


interface Props{
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ( { pokemons } ) => {
  
  
  
  return (
    <>
      <Layout title='Listado de pokemons'>
        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map((poke)=>(
              <PokemonCard pokemon={ poke } key={poke.id} />
            ))
          }
        </Grid.Container>
      </Layout>
    </>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const  { data } = await pokeapi.get<PokemonListResponse>('/pokemon?limit=151');
  
  // console.log('desde',data)
  
  const pokemons: SmallPokemon[] = data.results.map( (pokemon, i) =>({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))



  return {
    props: {
        name: 'bob',
        pokemons
    }
  }
}

export default HomePage
