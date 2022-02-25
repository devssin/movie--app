import React, { useContext } from 'react'
import { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import { MoviesContext, MoviesProvider } from '../context/MoviesContext'
const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const {setType} = useContext(MoviesContext)
  return (
    <nav className='w-full flex  justify-between items-center px-10 py-4'>
      <div className='md:flex-1 justify-center items-center'>
        <h2 className='text-white text-3xl font-bold'>Cima Land</h2>
      </div>

      <ul className='text-white hidden  md:flex flex-row items-center justify-between list-none '>
        <li
          className='mx-4 cursor-pointer text-lg font-medium drop-shadow-lg'
          onClick={() => {
            setType('tv')
        }}>
          TV Show
        </li>
        <li 
          className='mx-4 cursor-pointer text-lg font-medium'
          onClick={() => {setType('movie')}}
        > Movies</li>
      </ul>
      <div className='flex relative'>
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className='text-white md:hidden cursor-pointer '
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className='text-white md:hidden cursor-pointer '
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col 
              justify-start rounded-md white-glassmorphism text-white animate-slide-in transition-all	 '>
            <li className='text-xl w-full my-5'>
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <li className='text-xl w-full my-5 text-center cursor-pointer' onClick={() => {setType('movie')}}>
              Movies
            </li>
            <li className='text-xl w-full my-5 text-center cursor-pointer' onClick={() => {setType('tv')}}>
              {' '}
              Tv Shows
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Nav
