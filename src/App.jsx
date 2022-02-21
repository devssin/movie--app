import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { MoviesContext } from './context/MoviesContext';
function App() {
  const { setType, type, fetchPopular } = useContext(MoviesContext);

  

  return (
    <div className="App">
      <button onClick={() => setType('movie')}>Movies</button>
      <button onClick={() => setType('tv')}>Tv Shows</button>
    </div>
  );
}

export default App;
