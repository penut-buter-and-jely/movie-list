import Component from '../Component.js';
import MovieItem from './MovieItem.js';

class MovieList extends Component {
    render() {
        const dom = this.renderDOM();

        const movies = this.props.movies;

        if(!movies) {
            return dom;
        }

        console.log(movies);

        movies.forEach(movie => {
            const movieItem = new MovieItem({ movie });
            dom.appendChild(movieItem.render());
        });

        return dom;

    }
    renderTemplate() {
        return /*html*/ `
            <ul class="movie-list">
            </ul>
        `;
    }
}

export default MovieList;