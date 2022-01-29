import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { BiArrowBack } from "react-icons/bi";

const MoviePage = (props) => {
  const { imbdID } = useParams();

  const [movie, setMovie] = useState({});

  const getMovieByImdbiD = async (imdbID) => {
    const url = `http://www.omdbapi.com/?i=${imbdID}&apikey=491682b0`;
    const response = await fetch(url);
    const responseJson = await response.json();

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
    <div className="container-fluid movie-page">
      <Link to={`/`} className="btn back-button">
        {" "}
        <BiArrowBack /> Back{" "}
      </Link>
      <div className="col movie-container">
        <div className="movie-img">
          <img
            src={movie.Poster}
            alt={movie.imdbID}
            width="400"
            height="500"
          ></img>
        </div>
        <div className="col description-box">
          <div className="row title">
            <h1> {movie.Title} </h1>
          </div>
          <div className="row plot">
            <h3> Movie Plot </h3>
            <p> {movie.Plot} </p>
          </div>
          <div className="row actors">
            <h3> Actors </h3>
            <p> {movie.Actors} </p>
          </div>
          <div className="row genre">
            <h3> Genre </h3>
            <p> {movie.Genre} </p>
          </div>
          <div className="row language">
            <h3> Language </h3>
            <p> {movie.Language} </p>
          </div>
          <div className="row rating">
            <h3> IMDB Rating </h3>
            <p> {movie.imdbRating} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
