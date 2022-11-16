import React from 'react'

const Buttons = ({ text , type, click }) => {
  return (
    <>
        <button onClick={click} className={`${type == 'primary' ? 'bg-primary text-white':' bg-white text-primary'} py-3 px-7 rounded-md`}>{text}</button>
    </>
  )
}

export default Buttons