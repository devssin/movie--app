import React, { useContext, useState } from 'react';
import Nav from './Nav';
import { MoviesContext } from '../context/MoviesContext';
import Hero from './Hero';
const Main = () => {
  const [title, setTitle] = useState([]);
  const { popular, movie } = useContext(MoviesContext);

  return (
    <main className="w-full h-[100vh] bg-[url('https://www.denofgeek.com/wp-content/uploads/2019/05/godzillakingofmonsters-2.jpg')] bg-cover bg-no-repeat	bg-center	relative">
      <Nav />
      <Hero />
      <h1 className="text-white text-lg">{movie.title}</h1>
    </main>
  );
};

export default Main;
