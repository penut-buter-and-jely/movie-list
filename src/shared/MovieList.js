import Component from '../Component.js';
import MovieItem from './MovieItem.js';

class MovieList extends Component {
    render() {
        const dom = this.renderDOM();

        const movieItem = new MovieItem();
        dom.appendChild(movieItem.render());
        return dom;

    }
    renderTemplate() {
        return /*html*/ `
            <ul class="movie-list">
                <li>
                    <h2>Aladin</h2>
                    <img src="http://image.tmdb.org/t/p/w200/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg" alt="Aladin Poster">
                </li>
                <li>
                    <h2>Captain Marvel</h2>
                    <img src="http://image.tmdb.org/t/p/w200/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg" alt="Captain Marvel Poster">
                </li>
                <li>
                    <h2>John Wick: Chapter 3 – Parabellum</h2>
                    <img src="http://image.tmdb.org/t/p/w200/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg" alt="John Wick: Chapter 3 – Parabellum Poster">
                </li>
            </ul>
        `;
    }
}

export default MovieList;