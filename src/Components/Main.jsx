import React, { useContext } from 'react'
import Nav from './Nav'
import {MoviesContext} from '../context/MoviesContext'
import Hero from './Hero'
const Main = () => {

  const {} = useContext(MoviesContext)
  
  return (
    <main className="w-full h-[100vh] bg-[url('https://www.denofgeek.com/wp-content/uploads/2019/05/godzillakingofmonsters-2.jpg')] bg-cover bg-no-repeat	bg-center	relative">

      <Nav />
      <Hero />
    </main>

  )
}

export default Main