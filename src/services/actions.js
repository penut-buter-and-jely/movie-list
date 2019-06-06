import { auth, userFavoritesRef } from './firebase.js';

export function updateFavorite(makeFavorite, movie) {
    const userMovieRef = userFavoritesRef
        .child(auth.currentUser.uid)
        .child(movie.id);

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