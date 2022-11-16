import React from 'react'

const Search = () => {
  return (
    <>
        <div className=" border border-gray-300 mt-10 rounded-md overflow-hidden flex ">
            <input type="text" className=' outline-none border-none w-3/4 py-3 pl-3 text-sm  placeholder:text-gray-300' placeholder='Search for location' />
            <button className=' bg-primary w-1/4 text-white rounded-r-md'>Search</button>
        </div>
    </>
  )
}

export default Search