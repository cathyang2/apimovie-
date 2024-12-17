import axios from 'axios';

const API_KEY = '994204ead0dfd924620c7c98bc28853e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query = 'popular') => {
  const response = await axios.get(`${BASE_URL}/movie/${query}`, {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};


