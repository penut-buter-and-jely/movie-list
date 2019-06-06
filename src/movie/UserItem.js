import Component from '../Component.js';

class UserItem extends Component {
    renderTemplate() {
        const user = this.props.user;
        return /*html*/ `
            <a href="./favorites.html?uid=${user.uid}">
                <li>
                    <h3>${user.displayName}</h3>
                    <img src="${user.photoURL}">
                </li>
            </a>
        `;
    }
}

export default UserItem;