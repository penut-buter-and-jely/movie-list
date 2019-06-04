const URL = 'https://api.themoviedb.org/3';

const nowPlaying = '/movie/now_playing?';

const search = '/search/movie?';

const key = 'api_key=ad4e796c6d9178454e18a3586be79368';

const movieApi = {
    getMovies(queryProps) {
        let url = '';
        if(queryProps) {
            url = `${URL}${search}${key}&query=${queryProps.title}`;
        } 
        else {
            url = `${URL}${nowPlaying}${key}`;
        }

        return fetch(url)
            .then(response => response.json());
    }
    
};


export default movieApi;