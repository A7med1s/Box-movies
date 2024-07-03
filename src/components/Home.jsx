import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import Landing from './Landing'
import { getData } from '../rtk/slices/current-movie-slice'
import { Link } from 'react-router-dom'
import { firstMove,secMove,thirdMove } from '../rtk/slices/movies-slice'
const Home = () => {

  const dispatch = useDispatch()
  const movies = useSelector((state)=>state.movies)
  function btnOne (){
    document.getElementById("btn-move-one").classList.add("text-black")
    document.getElementById("btn-move-one").classList.add("bg-yellow-100")
    document.getElementById("btn-move-two").classList.remove("text-black")
    document.getElementById("btn-move-two").classList.remove("bg-yellow-100")
    document.getElementById("btn-move-three").classList.remove("text-black")
    document.getElementById("btn-move-three").classList.remove("bg-yellow-100")
  }
  function btnTwo (){
    document.getElementById("btn-move-two").classList.add("text-black")
    document.getElementById("btn-move-two").classList.add("bg-yellow-100")
    document.getElementById("btn-move-one").classList.remove("text-black")
    document.getElementById("btn-move-one").classList.remove("bg-yellow-100")
    document.getElementById("btn-move-three").classList.remove("text-black")
    document.getElementById("btn-move-three").classList.remove("bg-yellow-100")
  }
  function btnThree (){
    document.getElementById("btn-move-three").classList.add("text-black")
    document.getElementById("btn-move-three").classList.add("bg-yellow-100")
    document.getElementById("btn-move-two").classList.remove("text-black")
    document.getElementById("btn-move-two").classList.remove("bg-yellow-100")
    document.getElementById("btn-move-one").classList.remove("text-black")
    document.getElementById("btn-move-one").classList.remove("bg-yellow-100")
  }
  useEffect(()=>{
    dispatch(firstMove())
      window.scrollTo(0,0)
  },[])

  return (
 <>
<Landing/>
    <div id='movies' className='text-center px-8 home-background'>
    <div className='bg-black/50'>
    <p className='py-8 font-bold text-3xl text-yellow-300'>Movies</p>
   
    <div className='grid sm:grid-cols-4 grid-cols-2 gap-x-8 gap-y-16'>
      {
        movies.map((movie,i)=>{
        return (
          <>
          <div className='text-center card' key={`${i}-div`}>
            <img key={`${i}-img`} className='card-img' src={movie.img} alt="" />
            <Link to='movies' className='pt-2 cursor-pointer font-semibold hover:font-normal' onClick={()=>{
              dispatch(getData(movie));
            }}>{movie.name}</Link>
            <p key={`${i}-p`} className='cursor-pointer text-yellow-400'>#{movie.gener}</p>
          </div>
          </>
      )
      
})}</div>
  <div className='my-8'>
  <ul className="inline-flex text-center">
	  <li><button id='btn-move-one' onClick={()=>{
      dispatch(firstMove());
      btnOne()
    }} className="bg-yellow-100 px-4 py-2 rounded-md text-yellow-500 transition-colors duration-150 bg-white/50 border border-r-0 border-yellow-500">1</button></li>
	  <li><button id='btn-move-two' onClick={()=>{
      dispatch(secMove());
      btnTwo()
    }} className="px-4 py-2 rounded-md text-yellow-500 transition-colors duration-150 bg-white/50 border border-r-0 border-yellow-500">2</button></li>
	  <li><button id='btn-move-three' onClick={()=>{
      dispatch(thirdMove())
      btnThree()
    }} className="px-4 py-2 rounded-md text-yellow-500 transition-colors duration-150 bg-white/50 border border-r-0 border-yellow-500 ">3</button></li>
	</ul>
  </div>
    </div>
    </div>
 </>
  )
}

export default Home

