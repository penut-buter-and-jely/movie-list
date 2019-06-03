import Component from '../Component.js';

class Profile extends Component {
    renderTemplate() {
        return /*html*/ `
            <div class="profile">
                <img src="../../assets/profile.jpg" alt="Profile avatar">
            </div>
        `;
    }
}

export default Profile;