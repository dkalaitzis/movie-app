import React from "react";
import { BsXCircleFill } from "react-icons/bs";

const handleCancelClick = () => {
  console.log("hi")
}

const SearchBar = (props) => {
  return (
    <div className="search-bar-dropdown col col-sm-4">
      <div className="col">
        <input
          className="form-control"
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="Type to search..."
        >
          </input>
      </div>

      <div className="col cancel-button" onClick={handleCancelClick}>
        {" "}
        <BsXCircleFill />
        {" "}
      </div>

      <ul className="list-group">
        {props.movies.map((movie, index) => (
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            <div className="row">
              <div className="col-3">
                <div className="movie-icon">
                  <img
                    src={movie.Poster}
                    alt={movie.imdbID}
                    width="100"
                    height="120"
                  ></img>
                </div>
              </div>

              <div className="col-9">
                <div className="row">
                  <div className="movie-title">{movie.Title}</div>
                </div>

                <div className="row">
                  <div className="movie-type">Type: {movie.Type}</div>
                </div>

                <div className="row">
                  <div className="movie-year">Release Year: {movie.Year}</div>
                </div>

                <div className="row">
                  <div className="imdb-id">IMDB ID: {movie.imdbID}</div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
