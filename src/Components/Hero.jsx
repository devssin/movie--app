import React, { useContext } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { MoviesContext } from '../context/MoviesContext';

const Hero = () => {
  const { setType, fetchPopular, popular, setPopular } =
    useContext(MoviesContext);
  return (
    <div className="w-full flex flex-col md:justify-start justify-center items-start p-10 mt-10">
      <h1 className="text-white text-6xl font-bold">Godzeila</h1>
      <p className="text-white text-md font-bold sm:w-9/12 mt-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem iure
        officia molestiae totam suscipit, veniam dolor animi est temporibus hic
        facere aperiam ad asperiores aliquid. Fugit velit placeat aliquam illum?
      </p>

      <button className="text-white bg-transparent py-2 px-5  mt-5 border-[2px] border-white rounded-full flex justify-center items-center">
        <BsPlayFill fontSize={20} className="mr-3" /> Watch Now
      </button>
      {popular.map((item) => {
        <h1>item</h1>;
      })}
    </div>
  );
};

export default Hero;
