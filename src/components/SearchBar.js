import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      alert("Please enter a search term");
      return;
    }

    try {
      const apiKey = "994204ead0dfd924620c7c98bc28853e";
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
      const response = await axios.get(url);

      if (response.data.results.length === 0) {
        alert("No movies found. Please try a different search term.");
      } else {
        onSearch(response.data.results);
      }
    } catch (error) {
      console.error("Error fetching data from TMDB:", error);
      alert("An error occurred while searching for movies. Please try again later.");
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movie.."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
