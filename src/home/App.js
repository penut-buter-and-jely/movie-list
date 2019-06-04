import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';
import Search from '../shared/Search.js';

import movieApi from '../services/movie-api.js';
import hashStorage from '../utils/hash-storage.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'Movie List' });

        const movieList = new MovieList({ movies: [] });

        function loadMovies() {

            const queryProps = hashStorage.get();
            
            movieApi.getMovies(queryProps)
                .then(movies => {
                    movieList.update({ movies: movies.results });
                });
        }

        loadMovies();

        window.addEventListener('hashchange', () => {
            loadMovies();
        });

        const search = new Search();

        const main = dom.querySelector('main');

        dom.prepend(header.render());

        const button = dom.querySelector('button');

        button.addEventListener('click', () => {
            window.location = './favorites.html';
        });

        main.appendChild(search.render());
        main.appendChild(movieList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                    <button class="favorites-button">Favorites</button>
                </main>
            </div>
        `;
    }
}

export default App;