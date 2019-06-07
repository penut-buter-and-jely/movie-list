import Component from '../Component.js';
import Header from '../shared/Header.js';
import { auth, usersRef } from '../services/firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

class AuthApp extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'Sign In' });
        dom.prepend(header.render());

        ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult(response) {
                    const userRef = usersRef.child(response.user.uid);
                    userRef.update({
                        userId: response.user.uid,
                        displayName: response.user.displayName,
                        email: response.user.email,
                        photoURL: response.user.photoURL
                    })
                        .then(() => {
                            window.location = './';
                        });
                }
            },
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: './',
            credentialHelper: firebaseui.auth.CredentialHelper.NONE
        });

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