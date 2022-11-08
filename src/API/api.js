import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = '4e5147b94dd9ab5d00dab97571ce77c5';

const getTrending = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getSearchMovies = async (query, page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?&language=en-U&include_adult=true&api_key=${API_KEY}&page=${page}&query=${query}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getMovieСredits = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const API = {
  getTrending,
  getSearchMovies,
  getMovieDetails,
  getMovieСredits,
  getMovieReviews,
};
