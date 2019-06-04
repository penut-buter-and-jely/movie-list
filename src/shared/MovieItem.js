import Component from '../Component.js';
import Favorite from './Favorite.js';

class MovieItem extends Component {
    render() {
        const dom = this.renderDOM();

        const favorite = new Favorite({
            isFavorite: false,
            toggleFavorite: () => {
                console.log('add to favorites');
            }
        });

        dom.appendChild(favorite.render());
        

        return dom;
    }

    renderTemplate() {
        const movie = this.props.movie;

        const poster = movie.poster_path 
            ? `http://image.tmdb.org/t/p/w200${movie.poster_path}` 
            : './assets/poster-placeholder.png';

        return /*html*/ `
        <li>
            <h2>${movie.title}</h2>
            <img src="${poster}" alt="${movie.title} Poster">
        </li>
        `;
    }
}

export default MovieItem;