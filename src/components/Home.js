import React, { useEffect, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieListHeading from './MovieListHeading';
import SearchBar from './SearchBar';

const Home = () => {
  // create variable movies that holds some movies that we get from the api
  const [movies, setMovies] = useState([]);
  //create another state for the search input
  const [searchValue, setSearchValue] = useState('');


  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=491682b0`
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    } 
    else {
      setMovies([])
    }
  };

  // hook, [] means getMovieRequest is called when the page loads
  // when the app loads, useEffect hooks always called on the first render
  // when searchValue changes, the useEffect hook is triggered.
  useEffect(()=>{
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className='container-fluid App'>
      <div className='row'>
        <MovieListHeading heading = 'MooveeZ' />
      </div>
      <div className='row justify-content-center'>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} movies = {movies} />
      </div>
    </div>
    
  );
};

export default Home;
