import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui';


interface Props{
    children: ReactNode,
    title?: string
}

export const Layout: FC <Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App'}</title>
            <meta name="author" content="Roberto Ontiveros" />
            <meta name="description" content={`Informacion sobre el pokemon,${ title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokeddex`} />
        </Head>

        {/* {  NavBar } */}
        <Navbar />

        <main style={{
          padding: '0 20px'
        }}>
            { children }
        </main>
    </>
  )
}
