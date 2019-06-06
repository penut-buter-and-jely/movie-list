import { app } from '../src/services/firebase.js'; // import may be different depending on file structure
import './html-equal.js';
import './html-equal.test.js';
import './profile.test.js';
import './MovieItem.test.js';
import './MovieDetail.test.js';

QUnit.done(() => {
    app.delete();
});