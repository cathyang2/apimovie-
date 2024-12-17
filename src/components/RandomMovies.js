import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./RandomMovies";

const RandomMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const apiKey = "994204ead0dfd924620c7c98bc28853e";
        const page = Math.floor(Math.random() * 500) + 1; 
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
        const response = await axios.get(url);

        const shuffledMovies = response.data.results.sort(() => 0.5 - Math.random());
        setMovies(shuffledMovies.slice(0, 25)); 
      } catch (error) {
        console.error("Error fetching random movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMovies();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="random-movies">
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default RandomMovies;
