import Component from '../Component.js';

class Favorite extends Component {
    render() {
        const button = this.renderDOM();

        const isFavorite = this.props.isFavorite;

        button.addEventListener('click', () => {
            this.props.toggleFavorite(!isFavorite);
        });

        return button;
    }

    renderTemplate() {
        const isFavorite = this.props.isFavorite;
        return /*html*/ `
            <button class="favorite-star">${isFavorite ? '★' : '☆'}</button>
        `;
    }
}

export default Favorite;