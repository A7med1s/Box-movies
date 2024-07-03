import React, { useEffect } from 'react'

const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <div>
        <div className='about-us-layer capitalize'>
            <div className='bg-black/50 about-us-layer-two text-center'>
                <p className='py-8 font-bold text-3xl text-yellow-300'>About Us</p>
                <div className='py-16 px-4 mt-8 bg-yellow-400/75 text-black font-semibold txt-about text-xl'>
                <p>This is a website that displays everything related to the world of movies</p>
                <p >You will find all films of various genres (action / comedy / romance / science fiction / drama)</p>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default About
