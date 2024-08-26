import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../utils/axios'
import Loading from './Loading'
import Topnav from './Topnav'
import InfinniteScroll from 'react-infinite-scroll-component'
import Card from '../Card'

const Popular = () => {
    const navigate = useNavigate()
    const [category,setcategory] = useState("top_rated")
    const [movie,setmovie] = useState([])
    const [page,setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)

    const getmovie =async ()=>{
        try {
           const {data} = await axios.get(`/movie/${category}?page=${page}`)
        //    settranding(data.results)
        if(data.results.length >0){
          setmovie((prev)=>[...prev,...data.results])
          setpage(page+1)
        }
        else{
          sethasMore(false)
        }
        } catch (error) {
          console.log(error)
        }
      }
      const refreshHandler =  ()=>{
        if(movie.length == 0){
          getmovie()
        }
        else{
          setpage(1)
          setmovie([])
          getmovie()
        }
      }
    useEffect(() => {
     refreshHandler()
      getmovie()
    }, [category]) 
  return movie.length>0 ? (
    <div className=' w-screen h-secreen bg-[#1F1E24]'>
       <div className='w-full  px-[5%]  flex items-center justify-between'>
        
        <h1 className='text-2xl text-zinc-400 font-semibold'>
            <i onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-fill'></i>
            Movie ({category})
        </h1>
        <Topnav/>
        <div className='flex items-center '>
/        <div className='w-[2%]'></div>
        </div>
        </div>
        <InfinniteScroll dataLength={movie.length} next={getmovie} hasMore={true} loader={<h1>loading.... </h1>}>
       <Card data={movie} title="movie" />
        </InfinniteScroll>
    </div>
  ):<Loading/>
}

export default Popular