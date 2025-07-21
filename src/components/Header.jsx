import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <section className='bg-black md:flex md:justify-between items-center py-5 md:px-20 px-10'>
      <div className=' flex z-5 items-center justify-center'>
       <img src="/images/logo.png" alt="Logo" className=' w-[60px] ' />
        <h1 className='text-white text-3xl flex justify-center items-center '> <Link to="/">MapAble</Link></h1>
      </div>

      <nav className='mt-5 md:mt-0 text-white flex items-center '>
        <ul className='flex gap-5 text-xl  '>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/map">Map</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        </ul>
      </nav>
     
    </section>
  )
}

export default Header