import Component from '../Component.js';

class UserItem extends Component {
    renderTemplate() {
        const user = this.props.user;

        let avatar = user.photoURL ? user.photoURL : './assets/profile.png';

        return /*html*/ `
            <a href="./favorites.html?uid=${user.uid}">
                <li>
                    <h3>${user.displayName}</h3>
                    <img src="${avatar}">
                </li>
            </a>
        `;
    }
}

export default UserItem;