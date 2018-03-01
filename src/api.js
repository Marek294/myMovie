import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        'api_key': '3e85db7ef753fb8345cc8be646827745',
        'language': 'pl'
    }
})

export default {
    TV: {
        getTopRated: () => instance.get('discover/tv?sort_by=vote_average.desc&page=1&vote_count.gte=500').then(res => res.data.results),
        getMostPopular: () => instance.get('tv/popular?page=1').then(res => res.data.results),
        getTvDetails: (id) => instance.get(`/tv/${id}?append_to_response=credits%2Csimilar%2Crecommendations%2Ckeywords`).then(res => res.data),
        getSearchTV: (query) => instance.get(`/search/tv?query=${query}`).then(res => res.data.results)
    },
    Movie: {
        getUpcoming: (date) => instance.get(`discover/movie?sort_by=popularity.desc&include_adult=true&include_video=false&page=1&primary_release_date.gte=${date}`).then(res => res.data.results),
        getTopRated: () => instance.get('discover/movie?sort_by=vote_average.desc&page=1&vote_count.gte=5000').then(res => res.data.results),
        getMostPopular: () => instance.get('movie/popular?page=1').then(res => res.data.results),
        getMovieDetails: (id) => instance.get(`/movie/${id}?append_to_response=credits%2Csimilar%2Crecommendations%2Ckeywords`).then(res => res.data),
        getSearchMovies: (query) => instance.get(`/search/movie?query=${query}`).then(res => res.data.results)
    },
    Person: {
        getPersonDetails: (id) => instance.get(`/person/${id}?append_to_response=movie_credits%2Ctv_credits%2Cimages`).then(res => res.data),
    }
}