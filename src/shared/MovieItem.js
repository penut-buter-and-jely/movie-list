import Component from '../Component.js';
import Favorite from './Favorite.js';
import { auth, userFavoritesRef } from '../services/firebase.js';

class MovieItem extends Component {
    render() {
        const dom = this.renderDOM();
        const movie = this.props.movie;

        const userMovieRef = userFavoritesRef
            .child(auth.currentUser.uid)
            .child(movie.id);

        const favorite = new Favorite({
            isFavorite: false,
            toggleFavorite: (makeFavorite) => {
                if(makeFavorite) {
                    userMovieRef.set({
                        id: movie.id,
                        title: movie.title,
                        poster_path: movie.poster_path
                    });
                } else {
                    userMovieRef.remove();
                }
            }
        });

        dom.appendChild(favorite.render());

        userMovieRef.on('value', snapshot => {
            const isFavorite = Boolean(snapshot.val());
            favorite.update({ isFavorite });
        });

        return dom;
    }

    renderTemplate() {
        const movie = this.props.movie;

        const poster = movie.poster_path 
            ? `http://image.tmdb.org/t/p/w200${movie.poster_path}` 
            : './assets/poster-placeholder.png';

        return /*html*/ `
        <li>
            <a href="./movie.html?id=${movie.id}"><h2>${movie.title}</h2></a>
            <img src="${poster}" alt="${movie.title} Poster">
        </li>
        `;
    }
}

export default MovieItem;