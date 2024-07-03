import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { getData } from '../rtk/slices/current-movie-slice'
import { getSearch ,getAll,getempty} from '../rtk/slices/all-movies-slice'
const Navbar = () => {
  const [searchValue,setSerchvalue] = useState(" ")
  const dispatch = useDispatch()
  const movies = useSelector((state)=>state.allMovies)
  return (
 <>
 <nav className="md:bg-black/25 bg-black/100 sticky top-0">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
        <button onClick={()=>{
          document.getElementById("mobile-menu").classList.toggle("hidden")
        }} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
         <Link to="/" className='font-black text-2xl logo'>Box <span className='text-white'><span className='bg-red-700'>M</span><span className='bg-blue-800'>o</span><span className='bg-lime-500'>v</span><span className='bg-gray-400'>i</span><span className='bg-orange-500'>e</span><span className='bg-sky-600'>s</span></span></Link>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4 font-extrabold">
            <Link to="/" className="text-white link-nav hover:bg-yellow-300 hover:text-black  rounded-md px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/all-movies" className="text-white link-nav hover:bg-yellow-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium" aria-current="page">All Movies</Link>
            <Link to="/news" className="text-white link-nav hover:bg-yellow-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">News</Link>
            <Link to="/about" className="text-white link-nav hover:bg-yellow-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">About Us</Link>
              <div className='max-w-md mx-auto search-inp'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        onClick={()=>{
          dispatch(getempty())
          document.getElementById("search-layer").classList.remove("hidden");
        }}
        onChange={(e)=>{
          dispatch(getSearch(searchValue))
          setSerchvalue(e.target.value.toLowerCase());
}}
        className="h-full w-full outline-none text-sm text-gray-700 pr-2 "
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>
          </div>
        </div>
      </div>
     
    </div>
  </div>

  <div className="sm:hidden bg-black/100 hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
            <Link to="/" className="text-gray-300 hover:bg-yellow-300 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Home</Link>
            <Link to="/all-movies" className="text-gray-300 hover:bg-yellow-300 hover:text-black block rounded-md px-3 py-2 text-base font-medium" aria-current="page">All Movies</Link>
            <Link to="/news" className="text-gray-300 hover:bg-yellow-300 hover:text-black block rounded-md px-3 py-2 text-base font-medium">News</Link>
            <Link to="/about" className="text-gray-300 hover:bg-yellow-300 hover:text-black block rounded-md px-3 py-2 text-base font-medium">about Us</Link>
          <div className=' max-w-md mx-auto'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input onChange={(e)=>{
          dispatch(getSearch(searchValue))
          setSerchvalue(e.target.value);
        }}
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
onClick={()=>{
  dispatch(getempty())
  document.getElementById("search-layer").classList.remove("hidden")
}}
        type="text"
        id="search"
        placeholder="Search something.." />
    </div>
</div>
    </div>
  </div>
  <div className='bg-white/75 search-layer hidden' id='search-layer'>
  <div className='sec-search-layer'>
  <div className='x-btn'><svg onClick={()=>{
    dispatch(getAll());
    document.getElementById("search-layer").classList.add("hidden");
  }} fill="#000000" width="64px" height="64px" viewBox="0 0 32.311 32.311" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(-96.951 -642.343)"> <path d="M125.2,644.343a2.062,2.062,0,0,1,2.06,2.059v24.191a2.062,2.062,0,0,1-2.06,2.06H101.011a2.063,2.063,0,0,1-2.06-2.06V646.4a2.063,2.063,0,0,1,2.06-2.059H125.2m0-2H101.011a4.059,4.059,0,0,0-4.06,4.059v24.191a4.06,4.06,0,0,0,4.06,4.06H125.2a4.06,4.06,0,0,0,4.06-4.06V646.4a4.059,4.059,0,0,0-4.06-4.059Z"></path> <path d="M120.862,667.253a1,1,0,0,1-.707-.293l-15.511-15.51a1,1,0,0,1,1.414-1.414l15.511,15.51a1,1,0,0,1-.707,1.707Z"></path> <path d="M105.351,667.253a1,1,0,0,1-.707-1.707l15.511-15.51a1,1,0,0,1,1.414,1.414l-15.511,15.51A1,1,0,0,1,105.351,667.253Z"></path> </g> </g></svg></div>
  <div className='gap-x-8 gap-y-16'>
      {
        movies.map((movie,i)=>{
        return (
          <>
          <div key={i} className='text-center'>
            <Link to='movies' className='text-black pt-2 cursor-pointer font-semibold hover:font-normal' onClick={()=>{
              dispatch(getAll());
              dispatch(getData(movie))
              document.getElementById("search-layer").classList.add("hidden")
            }}>{movie.name}</Link>
          </div>
          </>
      )
      
})}</div>
  </div>
</div>
</nav>

 </>
  )
}

export default Navbar
