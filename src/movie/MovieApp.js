import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieDetail from './MovieDetail.js';

class MovieApp extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();

        const movieDetail = new MovieDetail();

        const main = dom.querySelector('main');

        dom.prepend(header.render());

        main.appendChild(movieDetail.render());

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

export default MovieApp;