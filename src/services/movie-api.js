const URL = 'https://api.themoviedb.org/3/movie/now_playing?';

const key = 'api_key=ad4e796c6d9178454e18a3586be79368';

const movieApi = {
    getMovies() {
        return fetch(URL + key)
            .then(response => response.json());
    }
};


export default movieApi;