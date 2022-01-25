import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const MoviePage = (props) => {
  const { imbdID } = useParams();

  const [movie, setMovie] = useState({});

  const getMovieByImdbiD = async (imdbID) => {
    const url = `http://www.omdbapi.com/?i=${imbdID}&apikey=491682b0`;
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson, "JELOO");

    if (responseJson) {
      setMovie((movie) => ({
        ...movie,
        ...responseJson,
      }));
    }
  };

  useEffect(() => {
    getMovieByImdbiD(imbdID);
  }, []);

  return (
    <div className="container details-page">
      <div className="movie-img">
        <img
          src={movie.Poster}
          alt={movie.imdbID}
          width="100"
          height="120"
        ></img>
      </div>
      <div className="description-box">
        <div className="row">
            hi
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
