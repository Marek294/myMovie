import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        'api_key': '3e85db7ef753fb8345cc8be646827745',
        'language': 'pl'
    }
})

export default {
    getNews: () => instance.get('tv/on_the_air?page=1').then(res => res.data.results)
}