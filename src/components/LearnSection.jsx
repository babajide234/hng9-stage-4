import React from 'react'
import Buttons from './Buttons'
import Img7 from '../assets/image 7.png'
import Img8 from '../assets/image 8.png'
import Img9 from '../assets/image 9.png'
const LearnSection = () => {
  return (
    <div className=" bg-primary md:px-32 md:py-28">
        <div className="flex">
            <div className=" w-1/3 text-white">
                <h2 className=" text-5xl mb-9 mt-16">Metabnb NFTs</h2>
                <p className=" text-lg leading-9 mb-12">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <Buttons
                    text={'Learn more'}
                />
            </div>
            <div className=" w-4/6 h-screen relative">
                <img src={Img7} alt="" className="  absolute z-20 bottom-20 left-10" />
                <img src={Img9} alt="" className=" absolute top-0 z-10 right-0" />
                <img src={Img8} alt="" className=" absolute  z-30 right-0 bottom-10" />
            </div>
        </div>
    </div>
  )
}

export default LearnSection