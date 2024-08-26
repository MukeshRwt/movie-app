import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../utils/axios'
import Loading from './Loading'
import Topnav from './Topnav'
import InfinniteScroll from 'react-infinite-scroll-component'
import Card from '../Card'

const Popular = () => {
    const navigate = useNavigate()
    const [category,setcategory] = useState("tv")
    const [popular,setpopular] = useState([])
    const [page,setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)

    const getpopular =async ()=>{
        try {
           const {data} = await axios.get(`${category}/popular?page=${page}`)
        //    settranding(data.results)
        if(data.results.length >0){
          setpopular((prev)=>[...prev,...data.results])
          setpage(page+1)
          console.log(popular)
        }
        else{
          sethasMore(false)
        }
        } catch (error) {
          console.log(error)
        }
      }
      const refreshHandler =  ()=>{
        if(popular.length == 0){
          getpopular()
        }
        else{
          setpage(1)
          setpopular([])
          getpopular()
        }
      }
    useEffect(() => {
     refreshHandler()
      getpopular()
    }, [category]) 
  return popular.length>0 ? (
    <div className=' w-screen h-secreen bg-[#1F1E24]'>
       <div className='w-full  px-[5%]  flex items-center justify-between'>
        
        <h1 className='text-2xl text-zinc-400 font-semibold'>
            <i onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-fill'></i>
            Popular
        </h1>
        <Topnav/>
        <div className='flex items-center '>
/        <div className='w-[2%]'></div>
        </div>
        </div>
        <InfinniteScroll dataLength={popular.length} next={getpopular} hasMore={true} loader={<h1>loading.... </h1>}>
       <Card data={popular} title={category} />
        </InfinniteScroll>
    </div>
  ):<Loading/>
}

export default Popular