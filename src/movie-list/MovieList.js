import Component from '../Component.js';

class MovieList extends Component {
    renderTemplate() {
        return /*html*/ `
            <ul class="movie-list">
                <li>
                    <h2>Aladin</h2>
                    <img src="" alt="">
                </li>

            </ul>
        `;
    }
}

export default MovieList;