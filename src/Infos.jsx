import React from 'react'

const Infos = ({ others }) => {
  if (others.main || others.wind){
  return (
    <div className='flex justify-around text-center align-middle pl-10 pr-10 pt-20 flex-wrap bg-white/30 pb-20 rounded-3xl'>
      <div>
        <h1>{others.main.temp} F°</h1>
        <p>feels like</p>
      </div>
      <div>
        <h1>{others.main.humidity}</h1>
        <p>Humidity</p>
      </div>
      <div>
        <h1>{others.wind.speed}</h1>
        <p>Wind Speed</p>
      </div>
    </div>
  )
  }
}

export default Infos