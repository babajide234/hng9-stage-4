import React from 'react'
import Header from '../components/Header'
import LearnSection from '../components/LearnSection'
import MainSection from '../components/MainSection'
import Layout from './Layout'

const Home = () => {
  return (
    <>
        <Layout>
            <Header/>
            <MainSection/>
            <LearnSection/>
        </Layout>
    </>
  )
}

export default Home