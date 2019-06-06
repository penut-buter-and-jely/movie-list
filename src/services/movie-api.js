// http://api.themoviedb.org/3/movie/504608?api_key=ad4e796c6d9178454e18a3586be79368

const URL = 'https://api.themoviedb.org/3';

const NOW_PLAYING = '/movie/now_playing?';

const MOVIE_DETAIL = `/movie`;

const SEARCH = '/search/movie?';

const KEY = 'api_key=ad4e796c6d9178454e18a3586be79368';


const movieApi = {
    getMovies(queryProps) {
        let url = '';
        if(queryProps.title) {
            url = `${URL}${SEARCH}${KEY}&query=${queryProps.title}`;
        } 
        else {
            url = `${URL}${NOW_PLAYING}${KEY}`;
        }
        
        return fetch(url)
            .then(response => response.json());
    },
    getMovie(id) {
        const url = `${URL}${MOVIE_DETAIL}/${id}?${KEY}`;
        return fetch(url)
            .then(response => response.json());   
    }
    
};


export default movieApi;