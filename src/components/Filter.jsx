import React from 'react'
import Settings from '../assets/settings.svg';

const Filter = () => {
  return (
    <>
        <div className=" px-32 flex justify-between pt-10 pb-10  items-center">
            <ul className=" flex text-secondary ">
                <li className=" mr-12 "><a href="" className="">Resturant</a></li>
                <li className=" mr-12 "><a href="" className="">Cottage</a></li>
                <li className=" mr-12 "><a href="" className="">Castle</a></li>
                <li className=" mr-12 "><a href="" className="">fantast city</a></li>
                <li className=" mr-12 "><a href="" className="">beach</a></li>
                <li className=" mr-12 "><a href="" className="">Carbins</a></li>
                <li className=" mr-12 "><a href="" className="">Off-grid</a></li>
                <li className=" mr-12 "><a href="" className="">Farm</a></li>
            </ul>
            <button className=" flex justify-between items-center border border-gray-200 rounded-lg px-3 py-2">
                <span>
                    Location
                </span>
                <img src={Settings} alt="" className="" />
            </button>
        </div>
    </>
  )
}

export default Filter