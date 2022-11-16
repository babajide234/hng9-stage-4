import React from 'react'
import Buttons from './Buttons'
import Logo from '../assets/logo.png'
import Modal from './Modal'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [open ,setOpen] = React.useState(false);

  const handleModal = ()=>{
    setOpen(!open);
  }
  return (
    <>
      <header className=' '>
          <div className="flex justify-between items-center md:px-32 md:py-10">

              <img src={Logo} alt="" className=" w-52 " />
              <ul className=" flex ">
                  <li className=" mr-12 text-secondary"><Link to="/" className="">Home</Link></li>
                  <li className=" mr-12 text-secondary"><Link to="/place" className="">Place to stay</Link></li>
                  <li className=" mr-12 text-secondary"><Link to="/" className="">NFTs</Link></li>
                  <li className=" mr-12 text-secondary"><Link to="/" className="">Community</Link></li>
              </ul>
              <Buttons text={`Connect wallet`} click={handleModal} type="primary"/>
          </div>
      </header>
      <Modal open={open} close={handleModal}/>
    </>
  )
}

export default Navbar