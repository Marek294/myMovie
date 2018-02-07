import api from '../api';

export const getOnTheAir = () => () => api.TV.getOnTheAir();

export const getTopRatedTV = () => () => api.TV.getTopRated();

export const getMostPopularTV = () => () => api.TV.getMostPopular();

export const getTvDetails = (id) => () => api.TV.getTvDetails(id);