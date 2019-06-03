import Component from '../Component.js';
import Header from '../shared/Header.js';

class AuthApp extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        dom.prepend(header.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                    <p>Please Sign In</p>
                    <div id="firebaseui-auth-container"></div>
                </main>
            </div>
        `;
    }
}

export default AuthApp;