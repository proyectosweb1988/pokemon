import React, { useState, useEffect} from 'react'
import { useRouter } from 'next/router';

import { util } from '../../utils';
import { Layout } from '../../components/layout'
import { NoFavorites } from '../../components/ui';
import { Container, Text, Image, Grid, Card, Button } from '@nextui-org/react';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritosPage = () => {

  const router = useRouter()

  const [Favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritos(util.pokemon)
  }, [])

  return (
    <Layout title='Pokemons - Favoritos'>

      {
        Favoritos.length === 0 ? (<NoFavorites /> ) :( <FavoritePokemons Favoritos={Favoritos} setFavoritos={ setFavoritos } />)
      }     
    </Layout>
  )
}

export default FavoritosPage