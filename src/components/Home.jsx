import React, { useEffect, useState } from 'react'
import Sidenav from './tamplates/Sidenav'
import Topnav from './tamplates/Topnav'
import axios from '../utils/axios'
import Header from './tamplates/Header'
import BottomCard from './tamplates/BottomCard'
import Loading from './tamplates/Loading'
const Home = () => {

   const [wallpaper,setwallpaper] =  useState(null)
   const [category,setcategory] = useState(null)
   const [filter,setfilter] = useState("all")
   
   
   const getHader = async()=>{
    try {
        const {data} = await axios.get(`/trending/all/day`)
        const random  = (Math.floor(Math.random()*data.results.length))
        setwallpaper(data.results[random])
    } catch (error) {
        console.log(error)
    }
   }
 
  const getcategory =async ()=>{
    try {
       const {data} = await axios.get(`/trending/${filter}/day`)
       setcategory(data.results)
    } catch (error) {
      console.log(error)
    }
  }
   useEffect(()=>{
     getcategory()
    !wallpaper &&  getHader()
   },[filter])
  return wallpaper  ?  (
    <>
      <Sidenav/>
      <div className='w-[80%] h-full'>
        <Topnav/>
        <Header data={wallpaper}/>
        <BottomCard data={category} setfilter={setfilter}/>
      </div>
    </>
  ):<Loading/>
}

export default Home