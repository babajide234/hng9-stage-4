import React from 'react'
import META from '../assets/meta.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
const Footer = () => {
  return (
    <div className=" md:px-32 px-6  bg-secondary flex   md:flex-row flex-col pt-16 pb-9">
        <div className=" w-full md:w-1/3 order-2 md:order-1">
            <img src={META} alt="" className="" />
            <div className=" flex mt-14">
                <a href="" className=" hover:bg-gray-600 mr-12 rounded-full p-3 flex w-12 h-12 justify-center items-center">
                    <img src={facebook} alt="" className="" />
                </a>
                <a href="" className=" hover:bg-gray-600 mr-12 rounded-full p-3 flex w-12 h-12 justify-center items-center">
                    <img src={twitter} alt="" className="" />
                </a>
                <a href="" className=" hover:bg-gray-600 mr-12 rounded-full p-3 flex w-12 h-12 justify-center items-center">
                    <img src={instagram} alt="" className="" />
                </a>
            </div>
            <p className=" text-white mt-14">
                &copy;
            2022 Metabnb
            </p>
        </div>
        <div className=" w-full md:w-2/3 flex justify-between order-1 md:order-2">
            <div className=" text-white text-sm">
                <h2 className=" mb-6 text-lg font-semibold">Community</h2>
                <ul className="">
                    <li className=" mb-3"><a href="" className=" hover:text-gray-300">NFT</a></li>
                    <li className=" mb-3"><a href="" className=" hover:text-gray-300">Tokens</a></li>
                    <li className=" mb-3"><a href="" className=" hover:text-gray-300">Landlords</a></li>
                    <li className=" mb-3"><a href="" className=" hover:text-gray-300">Discord</a></li>
                </ul>
            </div>
            <div className=" text-white text-sm">
                <h2 className=" mb-6 text-lg font-semibold">Places</h2>
                <ul className="">
                    <li className=" mb-3"><a href="" className=" hover:text-gray-300">Castle</a></li>
                    <li className=" mb-3"><a href="" className=" hover:text-gray-300">Farms </a></li>
                    <li className=" mb-3"><a href="" className=" hover:text-gray-300">Beach</a></li>
                    <li className=" mb-3"><a href="" className=" hover:text-gray-300">Learn more</a></li>
                </ul>
            </div>
            <div className=" text-white text-sm">
                <h2 className=" mb-6 text-lg font-semibold">About us</h2>
                <ul className="">
                    <li className=" mb-3"><a href="" className=" hover:text-gray-300">Road map</a></li>
                    <li className=" mb-3"><a href="" className=" hover:text-gray-300">Creators </a></li>
                    <li className=" mb-3"><a href="" className=" hover:text-gray-300">Career</a></li>
                    <li className=" mb-3"><a href="" className=" hover:text-gray-300">Contact us</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer