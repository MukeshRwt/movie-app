import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../utils/axios'
import Loading from './Loading'
import Topnav from './Topnav'
import InfinniteScroll from 'react-infinite-scroll-component'
import Card from '../Card'

const Person = () => {
    const navigate = useNavigate()
    const [category,setcategory] = useState("popular")
    const [person,setperson] = useState([])
    const [page,setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)

    const getperson =async ()=>{
        try {
           const {data} = await axios.get(`/person/${category}?page=${page}`)
        //    settranding(data.results)
        if(data.results.length >0){
          setperson((prev)=>[...prev,...data.results])
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
        if(person.length == 0){
          getperson()
        }
        else{
          setpage(1)
          setperson([])
          getperson()
        }
      }
    useEffect(() => {
     refreshHandler()
      getperson()
    }, [category]) 
  return person.length>0 ? (
    <div className=' w-screen h-secreen bg-[#1F1E24]'>
       <div className='w-full  px-[5%]  flex items-center justify-between'>
        
        <h1 className='text-2xl text-zinc-400 font-semibold'>
            <i onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-fill'></i>
            Person ({category})
        </h1>
        <Topnav/>
        <div className='flex items-center '>
/        <div className='w-[2%]'></div>
        </div>
        </div>
        <InfinniteScroll dataLength={person.length} next={getperson} hasMore={true} loader={<h1>loading.... </h1>}>
       <Card data={person} title="person" />
        </InfinniteScroll>
    </div>
  ):<Loading/>
}

export default Person