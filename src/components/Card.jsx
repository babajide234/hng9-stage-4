import React from 'react'
import Img from '../assets/image 3.png';
import Heart from '../assets/heart.svg';
import Star from '../assets/star.svg'
const Card = () => {
  return (
    <div className=" relative w-full border border-gray-200 rounded-2xl items-center p-4 flex flex-col">
        <img src={Img} alt="" className=" w-full h-60 mb-4" />
        <img src={Heart} alt="" className=" absolute top-8 right-8" />
        <div className=" w-full flex justify-between text-xs mb-3 text-secondary">
            <h3 className="">Desert king</h3>
            <h3 className=" font-bold">1MBT per night</h3>
        </div>
        <div className=" w-full flex justify-between text-xs mb-3 text-secondary">
            <h3 className="">2345km away</h3>
            <h3 className="">available for 2weeks stay</h3>
        </div>
        <div className=" w-full flex">
            <img src={Star} alt="" className=" mr-1" />
            <img src={Star} alt="" className=" mr-1" />
            <img src={Star} alt="" className=" mr-1" />
            <img src={Star} alt="" className=" mr-1" />
            <img src={Star} alt="" className=" mr-1" />
        </div>
    </div>
  )
}

export default Card