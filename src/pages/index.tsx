import React from 'react'
import Head from 'next/head'


import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <Link href="/game/new-game"><a>
        Create a new game</a></Link>
    </Container>
  )
}

export default Home
