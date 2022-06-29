import React from 'react'
import reactFormWorkImg from '../assets/formexample.png'
import firebaseImg from '../assets/firebaseloginexample.png'
import portfolioImg from '../assets/portfolioexample.png'

function Work() {
  return (
    <div name = 'work' className='w-full md:h-screen text-[#E5D3B3] bg-[#987554]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#664229]'>Work</p>
                <p className='py-6'>Here is some of my work</p>
            </div>

            <div className='grid sm:grid-flow-cols-2 md:grid-cols-3 gap-4'>
                {/*item 1*/}
                <div style={{backgroundImage :`url(${reactFormWorkImg})`}} 
                className='shadow-lg shadow-[#664229] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-[#664229] tracking-wider'>
                                                React-Form 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/RenayB/React-Form'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-[#664229] bg-[#ffffff] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage :`url(${firebaseImg})`}} 
                className='shadow-lg shadow-[#664229] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-[#664229] tracking-wider'>
                                                Sign In Auth App 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/RenayB/Firebase-Login-Page'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-[#664229] bg-[#ffffff] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage :`url(${portfolioImg})`}} 
                className='shadow-lg shadow-[#664229] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-[#664229] tracking-wider'>
                                                Portfolio 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-[#664229] bg-[#ffffff] font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
       
  )
}

export default Work