import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Cards from '../component/Cards'
import HeaderSection from '../component/HeaderSection'
import Features from '../component/Features'
import Explore from '../component/Explore'
import Player from '../component/Player'
import Startup from '../component/Startup'
import Teams from '../component/Teams'
import Footer from '../component/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Solfi</title>
        <meta name="description" content="Landing page for solfi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderSection />
        <Cards />
        <Features />
        <Explore />
        <Player />
        <Startup  /> 
        <Teams />
        <Footer />
    </>
  )
}

export default Home
