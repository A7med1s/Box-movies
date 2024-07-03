import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const CurrentMovie = () => {
    const movie = useSelector((state)=>state.currntMovie)

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
    <>
        <div className='text-center home-background pt-8'>
            <div className="grid md:grid-cols-2 grid-cols-1 px-8">
            <img src={movie.img} className='c-img py-8' alt="" />
            <div>
                <p className='text-yellow-400 text-xl font-semibold pt-16 pb-8'>{movie.name}</p>
                <div className='flex justify-center text-sm bg-white/25 rounded-full p-4 mb-4'>
                <p className='pr-16 '>Director By <span className='text-yellow-200 pl-2 font-bold'>{movie.dirctor}</span></p>
                <p className=''>Year <span className='text-black font-black'>{movie.year}</span></p>
                <p className='pl-16 '>Rate: <span className='text-yellow-600'>{movie.rate}</span></p>
                </div>
                <p className='md:text-md text-sm'>{movie.desc}</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default CurrentMovie
