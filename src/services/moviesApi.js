// key V3 6d17473ea7c58c1ca2996519868f7e8a
// https://api.themoviedb.org/3

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '6d17473ea7c58c1ca2996519868f7e8a';

export const getTrending = async () => {
  const data = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return data;
};

export const getMoviesQuery = async query => {
  const data = await axios.get(
    //   `search/movie?api_key=${API_KEY}&query=${query}`
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false&include_adult=false`
  );

  return data;
};

export const getMoviesDetails = async id => {
  const data = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getMoviesCredits = async id => {
  const data = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const getMoviesReviews = async id => {
  const data = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};
