import MovieDetail from '../src/movie/MovieDetail.js';

const test = QUnit.test;

QUnit.module('MovieDetail');

test('Makes Movie detail from template', assert => {
    // arrange  
    const movie = {
        'title': 'Aladdin',
        'poster_path': '/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg',
        'overview': 'A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.',
        'release_date': '2019-05-22'
    };

    const expected = /*html*/ `
        <div>
            <a href="./">
                <button>Home</button>
            </a>
            <a href="./favorites.html">
                <button>Favorites</button>
            </a>
            <h2>Aladdin</h2>
            <div class="favorite-container"></div>
            <img src="http://image.tmdb.org/t/p/w200/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg" alt="Aladdin Poster">
            <p>A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.</p>
            <p>Release Date: 2019-05-22</p>
        </div>
    `;

    // act
    const movieDetail = new MovieDetail({ movie });
    const rendered = movieDetail.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});

test('Returns div if there is no data', assert => {
    // arrange  
    const movie = null;

    const expected = /*html*/ `
        <div></div>
    `;

    // act
    const movieDetail = new MovieDetail({ movie });
    const rendered = movieDetail.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});