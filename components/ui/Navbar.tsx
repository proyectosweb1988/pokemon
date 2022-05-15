import React, { ChangeEvent, useState} from 'react'
import { Button, FormElement, Input, Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';


export const Navbar = () => {

    const { theme } = useTheme();

    const router = useRouter();

    const [pokemon, setPokemon] = useState({
      name: ''
    })

    const { name} = pokemon;
 

    const buscarPokemon = ()=>{
      if(name.length === 0){
        return
      }

      router.push(`/name/${ name }`)

    }

    const pokemonChange = (e: ChangeEvent<FormElement>)=>{


        setPokemon( { name: e.target.value})
        console.log(pokemon)
    }

  return (
    <div
        style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.gray900.value
        }}
    >
     <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
        alt="icono de la app"
        height={70}
        width={ 70 }
     />

      <NextLink href='/' passHref>
        <Link>
          <Text color='white' h2 >P</Text>
          <Text color='white' h3 >okemon BETA</Text>
        </Link>
      </NextLink>
      <Spacer/>
      <NextLink href='/favoritos' passHref>
        <Link>
          <text color='white'> Favoritos</text>
        </Link>
      </NextLink>
      
      

      <Spacer css={{ flex: 1}}/>

     
      {/* <Button
          onClick={buscarPokemon} 
      >
        Buscar
      </Button>
      <input
        
          placeholder="pokemon" 
          color='primary'
          name='name'
          value={name}
          // onChange={ pokemonChange }
          onChange={ pokemonChange }
       

        /> */}
          <Input
          
          labelLeft='Buscar'
          underlined
          placeholder="pokemon" 
          color='primary'
          name='name'
          value={name}
          // onChange={ pokemonChange }
          onChange={ pokemonChange }
          onClick={ buscarPokemon }
     

      />
     

    </div>
  )
}
