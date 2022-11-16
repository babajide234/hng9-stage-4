import React from 'react'
import Metamask from '../assets/metamask.svg'
import Wallet from '../assets/wallet.svg'
import Arrow from '../assets/arrow.svg'
const Modal = ({open,close}) => {
    const handleClose = ()=>{
        close();
    }
  return (
    <>
        <div className={`w-full h-screen ${open ? 'flex':'hidden'} justify-center items-center fixed top-0 bg-gray-800 bg-opacity-30 z-30`}>
            <div className=" w-4/5 md:w-2/5  bg-white rounded-2xl  ">
                <div className="px-8 py-6 border-b flex justify-between border-gray-300">
                    <h2 className="">Connect Wallet</h2>
                    <span onClick={handleClose} className=" w-6 h-6 rounded-full flex justify-center items-center text-gray-400 cursor-pointer hover:text-gray-800 p-4 hover:bg-slate-100">X</span>
                </div>
                <div className=" px-8 py-8 ">
                    <div className=" mb-4">
                        <p className=" text-base text-secondary">Choose your preferred wallet:</p>
                    </div>
                    <div className=" flex items-center border justify-between border-gray-300 rounded-xl py-3 px-5 mb-5">
                        <div className="flex items-center">
                            <img src={Metamask} alt="" className=" mr-4" />
                            <h3 className="">Metamask</h3>
                        </div>
                       <img src={Arrow} alt="" className="" />
                    </div>
                    <div className=" flex items-center border justify-between border-gray-300 rounded-xl py-3 px-5">
                        <div className=" flex items-center">
                            <img src={Wallet} alt="" className=" mr-4" />
                            <h3 className="">WalletConnect</h3>
                        </div>
                       <img src={Arrow} alt="" className="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal