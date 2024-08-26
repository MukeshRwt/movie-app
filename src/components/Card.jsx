import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data,title,rate}) => {
  console.log(title)
  return (
    <div className='flex flex-wrap w-full bg-[#1F1E24] h-full px-[5%] justify-center mt-8 items-center'>
        {data.map((d,i)=>(
           <Link to={`/${d.media_type|| title}/details/${d.id}`} className='relative w-[25vh] mr-[5%] mb-[5%]' key={i}>
            <img className='object-cover h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,.5)]' src={`https://image.tmdb.org/t/p/original/${d.poste_path || d.backdrop_path || d.profile_path}`} alt="" />
            <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'> {d.name || d.title || d.original_name || d.original_title}</h1>
            <div className='absolute text-white  w-[5vw] text-xl mt-3 font-semibold h-[5vh] rounded-full bg-yellow-500 flex items-center justify-center'>
            {d.vote_average ? (d.vote_average *10).toFixed(2):"97"} <sub>%</sub>
            </div>
           </Link>
           
        ))}
        
    </div>
  )
}

export default Card