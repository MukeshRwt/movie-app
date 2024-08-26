import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/tamplates/Popular'
import Movie from './components/tamplates/Movie'
import TvShow from './components/tamplates/Tvshow'
import Person from './components/tamplates/Person'
import MovieDetail from './components/MovieDetail'
import TvDetails from './components/TvDetails'
import PersonDetail from './components/PersonDetail'
import Trailor from './components/tamplates/Trailor'
const App = () => {
  return (
    <div className='w-screen  h-screen bg-[#1F1E24] flex '>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movie' element={<Movie/>}/> 
        <Route path='/movie/details/:id' element={<MovieDetail/>} >
           <Route path='/movie/details/:id/trailor' element={<Trailor/>}/>
        </Route>
        <Route path='/tv' element={<TvShow/>}/>  
        <Route path='/tv/details/:id' element={<TvDetails/>} >
          <Route path='/tv/details/:id/trailor' element={<Trailor/>} />
         </Route>
        <Route path='/person' element={<Person/>}/>  
        <Route path='/person/details/:id' element={<PersonDetail/>} />

     </Routes>
    </div>
  )
}

export default App