import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';
import Search from '../shared/Search.js';

import movieApi from '../services/movie-api.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'Movie List' });

        const movieList = new MovieList({ movies: [] });

        movieApi.getMovies()
            .then(movies => {
                movieList.update({ movies: movies.results });
            });

        const search = new Search();

        const main = dom.querySelector('main');

        dom.prepend(header.render());

        main.appendChild(search.render());
        main.appendChild(movieList.render());

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

export default App;