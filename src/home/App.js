import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'Movie List' });

        const movieList = new MovieList();

        const main = dom.querySelector('main');

        dom.prepend(header.render());

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