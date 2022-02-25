import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [type, setType] = useState('movie');
  const fetchPopular = async (type) => {
    try {
      const response = await fetch(`http://localhost:3500/${type}`);
      const data = await response.json();
      setPopular(data);
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPopular(type);
  }, [type]);





  return (
    <MoviesContext.Provider
      value={{ setType, fetchPopular, popular, setPopular, }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
