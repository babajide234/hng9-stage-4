import React from 'react'
import Meta from '../assets/meta.svg';
import Bnb from '../assets/bnb.svg';
import Sea from '../assets/sea.svg';
const Strip = () => {
  return (
    <div className=" bg-primary flex md:flex-row justify-between items-center px-6 py-4 md:px-32 md:py-4 ">
        <img src={Bnb} alt="" className=" w-24 md:w-52 mb-4" />
        <img src={Meta} alt="" className="  w-24 md:w-52 mb-4" />
        <img src={Sea} alt="" className=" w-24 md:w-52 mb-4" />
    </div>
  )
}

export default Strip