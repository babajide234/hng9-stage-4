import React from 'react'
import Card from './Card'
const MainSection = () => {
  const num = 8;
  return (
    <div className=" md:px-32 px-6 sm:px-4 py-12">
        <h2 className=" text-5xl text-center font-semibold">Inspiration for your next adventure</h2>

        <div className=" md:grid flex flex-col md:grid-cols-4 mt-12 gap-5 ">
          {
            Array(num).fill(true).map((_, i) => <Card key={i} />)
          }
        </div>
    </div>
  )
}

export default MainSection