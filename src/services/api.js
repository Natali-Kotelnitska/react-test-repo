import axios from 'axios';
const API_KEY = '30b880cb8af36a78b014f41021bfb163';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async (page = 1) => {
  const res = await axios.get(
    `/trending/movies/day?api_key=${API_KEY}&page=${page}`
  );
  console.log(res.data.results);
  return res.data.results;
};
