import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RandomMovies from "../components/RandomMovies";
import MovieCard from "../components/MovieCard";
import "./HomePage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const handleSearchResults = (results) => {
    setMovies(results);
  };

  return (
    <div className="homepage">
      <h1>Cathy Movies</h1>
      <SearchBar onSearch={handleSearchResults} />
      {movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <RandomMovies />
      )}
    </div>
  );
};

export default HomePage;
