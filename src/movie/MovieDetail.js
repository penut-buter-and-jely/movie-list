import Component from '../Component.js';
import Favorite from '../shared/Favorite.js';
import UserList from './UserList.js';
import { movieFavoritesRef } from '../services/firebase.js';
import { updateFavorite, getUserMovieFavoriteRef } from '../services/actions.js';


class MovieDetail extends Component {

    render() {
        const dom = this.renderDOM();

        const movie = this.props.movie;

        if(!movie) {
            return dom;
        }

        const userMovieRef = getUserMovieFavoriteRef(movie.id);

        const movieUserRef = movieFavoritesRef.child(movie.id);

        const favorite = new Favorite({
            isFavorite: false,
            toggleFavorite: (makeFavorite) => {
                updateFavorite(makeFavorite, movie);
            }
        });

        userMovieRef.on('value', snapshot => {
            const isFavorite = Boolean(snapshot.val());
            favorite.update({ isFavorite });
        });

        movieUserRef.on('value', snapshot => {
            const value = snapshot.val();
            const users = value ? Object.values(value) : [];
            userList.update({ users });
        });

        const favoriteContainer = dom.querySelector('.favorite-container');

        const userList = new UserList();
        dom.appendChild(userList.render());

        favoriteContainer.appendChild(favorite.render());
        
        return dom;
    }
    
    renderTemplate() {
        const movie = this.props.movie;

        if(!movie) {
            return '<div></div>';
        }

        const poster = movie.poster_path 
            ? `http://image.tmdb.org/t/p/w200${movie.poster_path}` 
            : './assets/poster-placeholder.png';

        return /*html*/ `
            <div>
                <a href="./">
                    <button>Home</button>
                </a>
                <a href="./favorites.html">
                    <button>Favorites</button>
                </a>
                <h2>${movie.title}</h2>
                <div class="favorite-container"></div>
                <img src="${poster}" alt="${movie.title} Poster">
                <p>${movie.overview}</p>
                <p>Release Date: ${movie.release_date}</p>
            </div>
        `;
    }
}

export default MovieDetail;