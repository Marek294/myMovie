import api from '../api';

export const getNowPlaying = () => () => api.Movie.getNowPlaying();

export const getTopRatedMovies = () => () => api.Movie.getTopRated();

export const getMostPopularMovies = () => () => api.Movie.getMostPopular();