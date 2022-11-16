import React from 'react'
import Meta from '../assets/meta.svg';
import Bnb from '../assets/bnb.svg';
import Sea from '../assets/sea.svg';
const Strip = () => {
  return (
    <div className=" bg-primary flex justify-between items-center md:px-32 md:py-4 ">
        <img src={Bnb} alt="" className="w-52 " />
        <img src={Meta} alt="" className=" w-52 " />
        <img src={Sea} alt="" className="w-52 " />
    </div>
  )
}

export default Strip