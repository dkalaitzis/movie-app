import React from "react";
import { BsXCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SearchBar = (props) => {
  return (
    <div className="search-bar-dropdown col col-sm-4">
      <div className="col search-wrapper">
        <input
          className="form-control"
          value={props.searchValue}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="Type to search..."
        ></input>
        {/* show (X) only when there is input and onClick clear the input */}
        {props.searchValue !== "" && (
          <div
            className="cancel-button"
            onClick={() => props.setSearchValue("")}
          >
            <BsXCircleFill />
          </div>
        )}
      </div>

      <ul className="list-group">
        {props.movies.map((movie, index) => (
          <li key={movie.imdbID}>
            <Link
              to={`/movies/${movie.imdbID}`}
              className="list-group-item list-group-item-action"
            >
              <div className="row">
                <div className="col-3">
                  <motion.div
                    className="movie-icon"
                    animate={{ x: 2, opacity: 1 }}
                    transition={{ type: "tween", stiffness: 100, delay: 0.2 }}
                    initial={{ opacity: 0, x: -20 }}
                  >
                    <img
                      src={movie.Poster}
                      alt={movie.imdbID}
                      width="100"
                      height="120"
                    ></img>
                  </motion.div>
                </div>

                <motion.div
                  className="col-9"
                  animate={{ x: 20, opacity: 1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  initial={{ opacity: 0, x: -30 }}
                >
                  <div className="row">
                    <div className="movie-title">{movie.Title}</div>
                  </div>

                  <div className="row">
                    <div className="movie-type">Type: {movie.Type}</div>
                  </div>

                  <div className="row">
                    <div className="imdb-id">IMDB ID: {movie.imdbID}</div>
                  </div>

                  <motion.div
                    className="row"
                    animate={{ scale: [0.5, 1], opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      duration: 1,
                      opacity: 1,
                    }}
                  >
                    <div className="movie-year">Release Year: {movie.Year}</div>
                  </motion.div>
                </motion.div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
