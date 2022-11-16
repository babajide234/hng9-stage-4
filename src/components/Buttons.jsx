import React from 'react'

const Buttons = ({ text , type, click }) => {
  return (
    <>
        <button onClick={click} className={`${type == 'primary' ? 'bg-primary text-white':' bg-white text-primary'} md:py-3 md:px-7 py-2 px-2 rounded-md`}>{text}</button>
    </>
  )
}

export default Buttons