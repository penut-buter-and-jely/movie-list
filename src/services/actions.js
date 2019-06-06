import { auth, userFavoritesRef } from './firebase.js';

export function updateFavorite(makeFavorite, movie) {
    const userMovieRef = getUserMovieFavoriteRef(movie.id);

    if(makeFavorite) {
        return userMovieRef.set({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path
        });
    } else {
        return userMovieRef.remove();
    }
}

export function getUserMovieFavoriteRef(id) {
    return userFavoritesRef
        .child(auth.currentUser.uid)
        .child(id);
}