import MovieItem from '../src/shared/MovieItem.js';

const test = QUnit.test;

QUnit.module('Movie Item');

test('Creates Movie Item from template', assert => {
    // const movie = {
    //     'title': 'Aladdin',
    //     'poster_path': '/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg'
    // };

    const expected = /*html*/ `
        <li>
            <h2>Aladin</h2>
            <img src="http://image.tmdb.org/t/p/w200/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg" alt="Aladin Poster">
        </li>
    `;

    const movieItem = new MovieItem();

    const rendered = movieItem.renderTemplate();

    assert.htmlEqual(rendered, expected);
}); 