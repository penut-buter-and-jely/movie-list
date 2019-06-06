import Component from '../Component.js';
import Header from '../shared/Header.js';

class MovieApp extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        dom.prepend(header.render());

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