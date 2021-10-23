import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Cards from '../component/Cards'
import HeaderSection from '../component/HeaderSection'
import Features from '../component/Features'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Solfi</title>
        <meta name="description" content="Landing page for solfi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSection />
      <Cards />
      <Features />
     
    </div>
  )
}

export default Home