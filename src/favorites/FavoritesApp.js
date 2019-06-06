import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';
import { auth, userFavoritesRef } from '../services/firebase.js';
import QUERY from '../QUERY.js';

class FavoritesApp extends Component {
    render() {
        const dom = this.renderDOM();

        const searchParams = QUERY.parse(window.location.search.slice(1));

        const favoritesId = searchParams.uid ? searchParams.uid : auth.currentUser.uid;

        const header = new Header({ title: 'FavZZZ MoviZZZ' });
        dom.prepend(header.render());

        const movieList = new MovieList({ movies: [] });
        dom.appendChild(movieList.render());

        userFavoritesRef
            .child(favoritesId)
            .on('value', snapshot => {
                const value = snapshot.val();
                const movies = value ? Object.values(value) : [];
                movieList.update({ movies });
            });

        const button = dom.querySelector('.home');

        button.addEventListener('click', () => {
            window.location = './index.html';
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                    <button class="home">Go Home</button>
                </main>
            </div>
        `;
    }
}

export default FavoritesApp;