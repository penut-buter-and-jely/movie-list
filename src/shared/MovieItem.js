import Component from '../Component.js';

class MovieItem extends Component {
    renderTemplate() {
        const movie = this.props.movie;
        return /*html*/ `
        <li>
            <h2>${movie.title}</h2>
            <img src="http://image.tmdb.org/t/p/w200${movie.poster_path}" 
            alt="${movie.title} Poster">
        </li>
        `;
    }
}

export default MovieItem;