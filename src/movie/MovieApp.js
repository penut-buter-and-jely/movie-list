import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieDetail from './MovieDetail.js';
import QUERY from '../QUERY.js';
import movieApi from '../services/movie-api.js';

class MovieApp extends Component {
    render() {
        const dom = this.renderDOM();
        const header = new Header();
        const movieDetail = new MovieDetail();

        const searchParams = QUERY.parse(window.location.search.slice(1));

        if(!searchParams.id) {
            window.location = './';
        }
        
        movieApi.getMovie(searchParams.id)
            .then(movie => {
                movieDetail.update({ movie });
            })
            .catch(err => console.log(err));

        const main = dom.querySelector('main');
        dom.prepend(header.render());
        main.appendChild(movieDetail.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default MovieApp;