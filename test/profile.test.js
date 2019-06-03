import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('Profile');

test('Creates Profile from template', assert => {
    const user = {
        displayName: 'Jack McConnell',
        photoURL: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/08/15/12/smileyfaceemoji1508a.jpg?w968'
    };

    const expected = /*html*/ `
        <div class="profile">
            <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/08/15/12/smileyfaceemoji1508a.jpg?w968" alt="Profile avatar">
            <span>Jack McConnell</span>
            <button>Sign Out</button>
        </div>
    `;

    const profile = new Profile({ user });
    const rendered = profile.renderTemplate();

    assert.htmlEqual(rendered, expected);
});

test('default avatar with no url', assert => {
    const user = {
        displayName: 'Jack McConnell',
        photoURL: null
    };

    const expected = /*html*/ `
        <div class="profile">
            <img src="../../assets/profile.png" alt="Profile avatar">
            <span>Jack McConnell</span>
            <button>Sign Out</button>
        </div>
    `;

    const profile = new Profile({ user });
    const rendered = profile.renderTemplate();

    assert.htmlEqual(rendered, expected);
});

test('empty div with no user', assert => {
    const user = null;

    const expected = /*html*/ `
        <div></div>
    `;

    const profile = new Profile({ user });
    const rendered = profile.renderTemplate();

    assert.htmlEqual(rendered, expected);
});