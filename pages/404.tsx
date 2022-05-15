import { Grid, Text } from '@nextui-org/react'
import React from 'react'
import { Layout } from '../components/layout'

const NoEncontrado = () => {
  return (
    <Layout title='404' >
       
                <Text css={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems:'center',
                    justifySelf: 'center',
                    justifyContent:'center',
                    flexDirection:'column',
                    height: 'calc(100vh - 100px)'
                    
                    }} h1> Sin resultados</Text>

    </Layout>
  )
}

export default NoEncontrado