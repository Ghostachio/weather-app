import React from 'react';

const Search = ({data, searching,}) => {
  return (
    <div className='flex justify-center pt-7 pb-8' >
      <input  id='one' type="text" className=' border-solid border-2 border-96 border-transparent bg-white/30 placeholder:text-white placeholder:text-lg text-black text-3xl text-center rounded-lg w-[300px] h-[50px]  hover:scale-110 transition duration-700 ease-in-out' placeholder='Enter City Name' onChange ={searching} onKeyPress={data} />
    </div>
  )
}

export default Search