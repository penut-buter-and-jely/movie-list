import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';
import { auth, userFavoritesRef } from '../services/firebase.js';

class FavoritesApp extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'FavZZZ MoviZZZ' });
        dom.prepend(header.render());

        const movieList = new MovieList({ movies: [] });
        dom.appendChild(movieList.render());

        userFavoritesRef
            .child(auth.currentUser.uid)
            .on('value', snapshot => {
                const value = snapshot.val();
                const movies = value ? Object.values(value) : [];
                movieList.update({ movies });
            });

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

export default FavoritesApp;