import React from 'react'
import Buttons from './Buttons'
import Img7 from '../assets/image 7.png'
import Img8 from '../assets/image 8.png'
import Img9 from '../assets/image 9.png'
const LearnSection = () => {
  return (
    <div className=" bg-primary px-6 md:px-32 md:py-28">
        <div className="flex flex-col  md:flex-row">
            <div className=" w-full md:w-1/3 text-white pb-11">
                <h2 className=" text-5xl mb-9 mt-16">Metabnb NFTs</h2>
                <p className=" text-lg leading-9 mb-12">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <Buttons
                    text={'Learn more'}
                />
            </div>
            <div className=" w-full md:w-4/6 h-screen hidden md:flex  relative">
                <img src={Img7} alt="" className=" w-40 absolute z-20 left-20 md:bottom-20 md:left-10" />
                <img src={Img9} alt="" className=" w-40 absolute md:top-0 z-10 md:right-0" />
                <img src={Img8} alt="" className=" w-40 absolute z-30 md:right-0 md:bottom-10" />
            </div>
        </div>
    </div>
  )
}

export default LearnSection