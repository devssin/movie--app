import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import {BsPlayFill} from 'react-icons/bs'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Hero = () => {
  const { setType, fetchPopular, popular, setPopular } = useContext(MoviesContext);
  return (
    <div className="w-full flex flex-col md:justify-start justify-center items-start p-10 mt-10">
      <h1 className="text-white text-6xl font-bold">Godzeila</h1>
      <p className="text-white text-md font-bold sm:w-6/12 mt-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem iure
        officia molestiae totam suscipit, veniam dolor animi est temporibus hic
        facere aperiam ad asperiores aliquid. Fugit velit placeat aliquam illum?
      </p>

      <Rating name="read-only" value={2.4} precision={0.1} readOnly />

      <button className="text-white bg-transparent py-2 px-5  mt-5 border-[2px] border-white rounded-full flex justify-center items-center">
        <BsPlayFill fontSize={20} className="mr-3" /> Watch Now
      </button>
    </div>
  );
};

export default Hero;
