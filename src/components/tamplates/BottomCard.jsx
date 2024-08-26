import React from 'react'
import { Link } from 'react-router-dom'
import Filter from './Filter'
const BottomCard = ({data,setfilter}) => {

  return (
    <div className='w-full  p-5 h-[40vh] '>
      <Filter title="Filter" opt={["tv","movie","all"]} setfilter={(e)=>setfilter(e.target.value)} />
      <div className='max-w-full flex h-[30vh] overflow-x-auto overflow-y-hidden'>
        {
            data.map((d,i)=>(
                <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[15%] h-full ml-5 '>
                  <img className='rounded-md object-cover h-[45%] '  src={
                       `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`
                 }  />
                  <h1 className='text-zinc-500  mt-2'>{d.title || d.name || d.orginal_name || d.original_title}</h1>
                  <p className='mt-2  w-full text-zinc-300'>{d.overview.slice(0,50)}...<Link className="text-blue-400">more</Link></p>

                </Link>
            ))
        }
      </div>
    </div>
  )
}

export default BottomCard