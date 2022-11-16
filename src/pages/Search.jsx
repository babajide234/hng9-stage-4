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
            <div className=" px-32 pb-20">
                <div className="  md:grid md:grid-cols-4 mt-12 gap-5 ">
                    { Array(num).fill(true).map((_, i) => <Card key={i} />) }
                </div>
            </div>
        </Layout>
    </>
  )
}

export default SearchPage