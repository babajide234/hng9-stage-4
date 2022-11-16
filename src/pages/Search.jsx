import React from 'react'
import Card from '../components/Card';
import Filter from '../components/Filter'
import Layout from './Layout'

const SearchPage = () => {
const num = 16;
  return (
    <>
        <Layout>
            <Filter/>
            <div className=" md:px-32 px-6 pb-20">
                <div className=" flex flex-col md:grid md:grid-cols-4 md:mt-12 gap-5 ">
                    { Array(num).fill(true).map((_, i) => <Card key={i} />) }
                </div>
            </div>
        </Layout>
    </>
  )
}

export default SearchPage