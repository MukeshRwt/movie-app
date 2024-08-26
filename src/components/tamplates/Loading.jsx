import React from 'react'
import loading from '../../assets/loading.webp'
const Loading = () => {
  return (
    <div className='w-full h-full flex bg-black justify-center items-center'>
        <img className='w-[50%]' src={loading} alt="" />
    </div>
  )
}

export default Loading