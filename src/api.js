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
        getOnTheAir: () => instance.get('tv/on_the_air?page=1').then(res => res.data.results),
        getTopRated: () => instance.get('discover/tv?sort_by=vote_average.desc&page=1&vote_count.gte=500').then(res => res.data.results),
        getMostPopular: () => instance.get('tv/popular?page=1').then(res => res.data.results),
    },
    Movie: {
        getNowPlaying: () => instance.get('movie/now_playing?page=1').then(res => res.data.results),
        getTopRated: () => instance.get('discover/movie?sort_by=vote_average.desc&page=1&vote_count.gte=5000').then(res => res.data.results),
        getMostPopular: () => instance.get('movie/popular?page=1').then(res => res.data.results),
    } 
}