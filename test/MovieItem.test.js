import MovieItem from '../src/shared/MovieItem.js';

const test = QUnit.test;

QUnit.module('Movie Item');

test('Creates Movie Item from template', assert => {
    const movie = {
        'title': 'Aladdin',
        'poster_path': '/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg',
        'id': 420817
    };

    const expected = /*html*/ `
        <li>
            <a href="./movie.html?id=420817"><h2>Aladdin</h2></a>
            <img src="http://image.tmdb.org/t/p/w200/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg" alt="Aladdin Poster">
        </li>
    `;

    const movieItem = new MovieItem({ movie });

    const rendered = movieItem.renderTemplate();

    assert.htmlEqual(rendered, expected);
}); 