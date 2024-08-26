import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './tamplates/Topnav'
//import Filter from './tamplates/Filter'
import axios from '../utils/axios'
import Card from './Card'
import Loading from './tamplates/Loading'
import InfinniteScroll from 'react-infinite-scroll-component'

const Trending = () => {
    const navigate = useNavigate()
    const [category,setcategory] = useState("all")
    const [trending,settranding] = useState([])
    const [duration,setduration] = useState("day")
    const [page,setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    const getcategory =async ()=>{
        try {
           const {data} = await axios.get(`/trending/${category}/${duration}`)
        //    settranding(data.results)
        if(data.results.length >0){
          settranding((prev)=>[...prev,...data.results])
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
        if(trending.length == 0){
          getcategory()
        }
        else{
          setpage(1)
          setcategory([])
          
        }
      }
    useEffect(() => {
     refreshHandler()
      getcategory()
    }, [category,duration]) 
  return trending.length>0? (
    <div className=' w-screen h-secreen bg-[#1F1E24]'>
       <div className='w-full  px-[5%]  flex items-center justify-between'>
        
        <h1 className='text-2xl text-zinc-400 font-semibold'>
            <i onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-fill'></i>
            Trending
        </h1>
        <Topnav/>
        <div className='flex items-center '>
/        <div className='w-[2%]'></div>
        </div>
        </div>
        <InfinniteScroll dataLength={trending.length} next={getcategory} hasMore={true} loader={<h1>loading.... </h1>}>
       <Card data={trending} title={category} />
        </InfinniteScroll>
    </div>
  ):<Loading/>
}

export default Trending