import React from 'react'

const Temp = ({temperature}) => {
if (temperature.main){
  return (
    <div className='mx-auto text-center pt-10 pb-10 bg-white/20 rounded-3xl w-[400px] mb-8'>
      <p>{temperature.name}</p>
      <h1>{temperature.main.temp} F°</h1>
    </div>
  )
} else {
  return null
}
}

export default Temp