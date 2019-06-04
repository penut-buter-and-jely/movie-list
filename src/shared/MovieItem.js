import Component from '../Component.js';

class MovieItem extends Component {
    renderTemplate() {
        return /*html*/ `
        <li>
            <h2>Aladin</h2>
            <img src="http://image.tmdb.org/t/p/w200/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg" alt="Aladin Poster">
        </li>
        `;
    }
}

export default MovieItem;