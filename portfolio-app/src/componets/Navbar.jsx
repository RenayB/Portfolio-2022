import React,{useState} from 'react'
import {FaBars, FaTimes, FaGithub,FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from './Portfolio-2022/assets/R.png';
import { Link } from 'react-scroll/modules';

const Navbar = () => {
  const[nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)



  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#987554] text-[#E5D3B3]'>
        <div>
          <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
        </div>
         {/*Menu*/}
            <ul className='hidden md:flex'>
                <li>
                  <Link to="home" spy={true} smooth={true} duration={500} >
                  Home
                  </Link>
                </li>
                <li><Link to="about" spy={true} smooth={true} duration={500} >
                  About
                  </Link>
                </li>
                <li><Link to="skills" spy={true} smooth={true} duration={500} >
                  Skills
                  </Link>
                </li>
                <li><Link to="work" spy={true} smooth={true} duration={500} >
                  Work
                  </Link>
                </li>
            </ul>
        

         <div onClick={handleClick} className='md:hidden z-10'>
             {!nav ? <FaBars/> : <FaTimes/>}
         </div>
          {/*Mobile Menu*/}
         <div className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#664229] flex flex-col justify-center items-center'}>
             <ul>
                 <li  className='py-6 text-4xl'><Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500} >
                  Home
                  </Link></li>
                 <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500} >
                  About
                  </Link></li>
                 <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" spy={true} smooth={true} duration={500} >
                  Skills
                  </Link></li>
                 <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" spy={true} smooth={true} duration={500} >
                  Work
                  </Link></li>
             </ul>

         </div>
         <div className='hidden lg:flex fixed flex-col top-[35%] left-0'> 
           <ul>
             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#664229]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/renay-brown/'
                target="_blank"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
             </li> 
             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#664229]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/RenayB'
                target="_blank"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#664229]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='mailto: renaylb@gmail.com'
              >
                Email <HiOutlineMail size={30} />
              </a>
           </li>
           </ul>
         </div>

    </div> 
  )

  }
export default Navbar
