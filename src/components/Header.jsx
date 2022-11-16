import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Pic from '../assets/pic.svg';
import Strip from './Strip';

const Header = () => {
  return (
    <>
        <div className=" flex md:px-32 md:pt-10 md:pb-16 px-7 pb-10 flex-col md:flex-row relative">
            <div className=" md:w-2222 w-full">
                <h1 className=" md:text-h1 text-4xl leading-tight text-secondary">
                Rent a <span className=" text-primary">Place</span> away from <span className=" text-primary">Home</span> in the <span className=" text-primary">Metaverse</span>
                </h1>
                <p className=" md:mt-12 text-secondary md:text-xl text-lg leading-8">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <Search/>
            </div>
            <div className=" md:w-2/5 md:px-16 md:relative hidden md:block ">
                <img src={Pic} alt="" className=" md:absolute md:w-52 md:h-40" style={{
                  bottom:'150px',
                  left:'75px'
                }}/>
                <img src={Pic} alt="" className=" md:absolute md:w-52 md:h-40" style={{
                  bottom:'-15px',
                  left:'75px'
                }}/>
                <img src={Pic} alt="" className=" md:absolute md:w-52 md:h-40 " style={{
                  top:'0px',
                  right:'0px'
                }}/>
                <img src={Pic} alt="" className=" md:absolute md:w-52 md:h-40 " style={{
                  bottom:'15px',
                  right:'0px'
                }}/>
            </div>
        </div>
        <Strip/>
    </>
  )
}

export default Header