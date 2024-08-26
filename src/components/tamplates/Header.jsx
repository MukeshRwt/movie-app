import React from 'react'
import { Link } from 'react-router-dom'
const Header = ({data}) => {
  return (
    <div  style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,backgroundPosition:"center",backgroundSize:"cover"}} className="flex  flex-col w-full h-[50vh] items-start
      justify-end p-[5%]">
        <h1 className='w-[70%] text-5xl font-bold  text-white'>{data.name  || data.original_name || data.title}</h1>
        <p className='mt-5 w-[70%] text-white'>{data.overview.slice(0,200)}...<Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link></p>
        <p className='text-white mt-4 flex gap-1'>
            <i className='ri-megaphone-fill text-green-500'></i>
            {data.release_date || "No Information"}
            <i className='ri-album-fill text-green-500 ml-5'></i>
            {data.media_type.toUpperCase()}
        </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailor`} className='bg-[#6556CD] p-2 rounded text-white  mt-5'>
            Watch Trailor
        </Link>
    </div>
  )
}

export default Header