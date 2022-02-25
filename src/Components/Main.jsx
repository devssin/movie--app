import React, { useContext, useState } from 'react';
import Nav from './Nav';
import { MoviesContext } from '../context/MoviesContext';
import Hero from './Hero';
import Slides from './Slides'
const Main = () => {

  return (
    <main className="w-full h-[100vh] bg-[url('https://www.denofgeek.com/wp-content/uploads/2019/05/godzillakingofmonsters-2.jpg')] bg-cover bg-no-repeat	bg-center	relative">
      <Nav />
      <Hero />
      <div className="sm:mt-[150px] my-4 px-4 py-2 bg-[#1a2b47]">
        <Slides />
      </div>
    </main>
  );
};

export default Main;
