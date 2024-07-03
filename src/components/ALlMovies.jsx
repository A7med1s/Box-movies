import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getData } from '../rtk/slices/current-movie-slice'
import { Link } from 'react-router-dom'
import {getAll, getAction ,getDrama ,getRomantic,getAnimation,getComedy,getSciFi} from '../rtk/slices/all-movies-slice'
const ALlMovies = () => {
    const dispatch = useDispatch()
    const movies = useSelector((state)=>state.allMovies)
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
 <>
   <div className='text-center px-8 home-background'>
    <div className='bg-black/50'>
    <p className='py-8 font-bold text-3xl text-yellow-300'>All Movies</p>
    <div className='mb-8'>
      <button className='mx-4 mt-4 bg-white text-black p-2 rounded-md hover:bg-yellow-300 font-semibold' onClick={()=>{
        dispatch(getAll())
      }}>All</button>
      <button className='mx-4 bg-white text-black p-2 rounded-md hover:bg-yellow-300 font-semibold' onClick={()=>{
        dispatch(getAction())
      }}>Action</button>
      <button className='mx-4 mt-4 bg-white text-black p-2 rounded-md hover:bg-yellow-300 font-semibold' onClick={()=>{
        dispatch(getRomantic())
      }}>Romantic</button>
      <button className='mx-4 mt-4 bg-white text-black p-2 rounded-md hover:bg-yellow-300 font-semibold' onClick={()=>{
        dispatch(getDrama())
      }}>Drama</button>
      <button className='mx-4 mt-4 bg-white text-black p-2 rounded-md hover:bg-yellow-300 font-semibold' onClick={()=>{
        dispatch(getSciFi())
      }}>Sci-Fi</button>
      <button className='mx-4 mt-4 bg-white text-black p-2 rounded-md hover:bg-yellow-300 font-semibold' onClick={()=>{
        dispatch(getAnimation())
      }}>Animation</button>
      <button className='mx-4 mt-4 bg-white text-black p-2 rounded-md hover:bg-yellow-300 font-semibold' onClick={()=>{
        dispatch(getComedy())
      }}>Comedy</button>
    </div>
    <div className='grid sm:grid-cols-4 grid-cols-2 gap-x-8 gap-y-16'>
      {
        movies.map((movie)=>{
        return (
          <>
          <div className='text-center card'>
            <img className='card-img' src={movie.img} alt="" />
            <Link to='movies' className='pt-2 cursor-pointer font-semibold hover:font-normal' onClick={()=>{
              dispatch(getData(movie));
            }}>{movie.name}</Link>
            <p className='cursor-pointer text-yellow-400'>#{movie.gener}</p>
          </div>
          </>
      )
      
})}</div>
<button className='top-btn' onClick={()=>{
   window.scrollTo(0,0)
}}>^</button>
</div>
</div>
</>
  )
}

export default ALlMovies
