import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [type, setType] = useState('movie');
  const [popular, setPopular] = useState(null);
  const fetchPopular = async (type) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/popular?api_key=71a7c06b948e1262aec789e5bea4f67b&language=en-US&page=1`
      );
      const data = await response.json();
      setPopular(data.results)
      console.log(popular);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
      fetchPopular(type)
  },[type])

  return (
    <MoviesContext.Provider value={{ setType, fetchPopular, popular,setPopular }}>
      {children}
    </MoviesContext.Provider>
  );
};
