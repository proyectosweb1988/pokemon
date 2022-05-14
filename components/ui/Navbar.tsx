import { Button, Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react'

export const Navbar = () => {

    const { theme } = useTheme();

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
      
      

      <Spacer css={{ flex: 1}}/>

      <NextLink href='/favoritos' passHref>
        <Link>
          <text color='white'> Favoritos</text>
        </Link>
      </NextLink>


     

    </div>
  )
}
