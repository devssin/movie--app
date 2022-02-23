import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [movie, setMovie] = useState({});
  const [type, setType] = useState('movie');
  const fetchPopular = async (type) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/popular?api_key=71a7c06b948e1262aec789e5bea4f67b`
      );
      const data = await response.json();
      setPopular(data.results);
      console.log(popular);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPopular(type);
  }, [type]);

  const fetchMovieWithhId = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/634649?api_key=71a7c06b948e1262aec789e5bea4f67b&language=en-US`
      );
      const data = await response.json();
      setMovie(data);
      console.log(movie);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieWithhId();
  }, []);

  return (
    <MoviesContext.Provider
      value={{ setType, fetchPopular, popular, setPopular, movie }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
