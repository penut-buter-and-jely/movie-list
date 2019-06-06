import Component from '../Component.js';

class MovieDetail extends Component {
    renderTemplate() {
        const movie = this.props.movie;

        const poster = movie.poster_path 
            ? `http://image.tmdb.org/t/p/w200${movie.poster_path}` 
            : './assets/poster-placeholder.png';

        return /*html*/ `
            <div>
                <h2>${movie.title}</h2>
                <img src="${poster}" alt="${movie.title} Poster">
                <p>${movie.overview}</p>
                <p>Release Date: ${movie.release_date}</p>
            </div>
        `;
    }
}

export default MovieDetail;