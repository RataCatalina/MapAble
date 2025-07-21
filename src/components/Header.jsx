import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <section className='bg-black flex justify-between items-center py-5 px-20'>
      <div className=' flex z-5 items-center'>
       <img src="/images/logo.png" alt="Logo" className=' w-[60px] ' />
        <h1 className='text-white text-3xl flex justify-center items-center '> <Link to="/">MapAble</Link></h1>
      </div>

      <nav className=' text-white flex items-center'>
        <ul className='flex gap-5 text-xl '>
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