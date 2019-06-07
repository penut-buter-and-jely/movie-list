import { auth, userFavoritesRef, movieFavoritesRef } from './firebase.js';

export function updateFavorite(makeFavorite, movie) {
    const userMovieRef = getUserMovieFavoriteRef(movie.id);
    const movieUserRef = getMovieUserFavoriteRef(movie.id);
    const currentUser = auth.currentUser;

    if(makeFavorite) {
        userMovieRef.set({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path
        });
        movieUserRef.set({
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
        });
    } else {
        userMovieRef.remove();
        movieUserRef.remove();
    }
}

export function getUserMovieFavoriteRef(id) {
    return userFavoritesRef
        .child(auth.currentUser.uid)
        .child(id);
}

export function getMovieUserFavoriteRef(id) {
    return movieFavoritesRef
        .child(id)
        .child(auth.currentUser.uid);
}
