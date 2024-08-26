import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../utils/axios'
import Loading from './Loading'
import Topnav from './Topnav'
import InfinniteScroll from 'react-infinite-scroll-component'
import Card from '../Card'

const Tvshow = () => {
    const navigate = useNavigate()
    const [category,setcategory] = useState("top_rated")
    const [tv,settv] = useState([])
    const [page,setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)

    const gettv =async ()=>{
        try {
           const {data} = await axios.get(`/tv/${category}?page=${page}`)
        //    settranding(data.results)
        if(data.results.length >0){
          settv((prev)=>[...prev,...data.results])
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
        if(tv.length == 0){
          gettv()
        }
        else{
          setpage(1)
          settv([])
          gettv()
        }
      }
    useEffect(() => {
     refreshHandler()
      gettv()
    }, [category]) 
  return tv.length>0 ? (
    <div className=' w-screen h-secreen bg-[#1F1E24]'>
       <div className='w-full  px-[5%]  flex items-center justify-between'>
        
        <h1 className='text-2xl text-zinc-400 font-semibold'>
            <i onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-fill'></i>
            TV ({category})
        </h1>
        <Topnav/>
        <div className='flex items-center '>
/        <div className='w-[2%]'></div>
        </div>
        </div>
        <InfinniteScroll dataLength={tv.length} next={gettv} hasMore={true} loader={<h1>loading.... </h1>}>
        <Card data={tv} title="tv" rate="56%"/>
        </InfinniteScroll>
    </div>
  ):<Loading/>
}

export default Tvshow