import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const MoviePage = (props) => {
  const { imbdID } = useParams();

  const [movie, setMovie] = useState([]);

  const getMovieByImdbiD = async (imdbID) => {
    const url = `http://www.omdbapi.com/?i=${imbdID}&apikey=491682b0`
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson)

    if (responseJson.Search) {
      setMovie(responseJson.Search);
    } 
    
  };

  useEffect(()=>{
    getMovieByImdbiD(imbdID);
  }, []);

  return (
    <div className="details-page">
      {/* <div className="movie-img">
        <img
          src={movie.Poster}
          alt={movie.imdbID}
          width="100"
          height="120"
        ></img>
      </div> */}
      {imbdID}
      {movie}
      {/* <div className="description-box">
        <div className="row"></div>
      </div> */}
    </div>
  );
};

export default MoviePage;
