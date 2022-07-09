import React from 'react'
  import { Link } from 'react-scroll/modules';

const Home = () => {
  return (
    <div name='home'className='w-full h-screen bg-[#987554]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#FFFFFF]'>Hi, my name is,</p>
            <p className='text-4xl sm:text-7xl font-bold text-[#664229]'>Renay Brown</p>
            <h2 className='text-4xl sm:text7xl font-bold text-[#E5D3B3]'>I'm a Software Engineer.</h2>
            <p className='text-[#E5D3B3] py-4 max-w[700px]'>Currently I am a software engineer that works on building and deploying desktop software and web applications.</p>
            <div>
                <Link to="work" spy={true} smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#664229] hover:border-[#664229] '> 
                View Work  
                </button>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Home