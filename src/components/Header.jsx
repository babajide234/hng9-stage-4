import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import img1 from '../assets/image 3.png';
import Strip from './Strip';

const Header = () => {
  return (
    <>
        <div className=" flex md:px-32 md:pt-10 md:pb-16 px-7 pb-10 flex-col">
            <div className=" md:w-2222 w-full">
                <h1 className=" md:text-h1 text-4xl leading-tight text-secondary">
                Rent a <span className=" text-primary">Place</span> away from <span className=" text-primary">Home</span> in the <span className=" text-primary">Metaverse</span>
                </h1>
                <p className=" md:mt-12 text-secondary md:text-xl text-lg leading-8">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <Search/>
            </div>
            <div className=" px-16 relative hidden md:flex ">
                <img src={img1} alt="" className=" absolute w-56 top-24" />
            </div>
        </div>
        <Strip/>
    </>
  )
}

export default Header