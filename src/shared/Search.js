import Component from '../Component.js';

import hashStorage from '../utils/hash-storage.js';

class Search extends Component {

    render() {
        const dom = this.renderDOM();

        const input = dom.querySelector('input');

        dom.addEventListener('submit', event => {
            event.preventDefault();
            const search = input.value;
            if(search) {
                hashStorage.set({
                    title: search,
                    page: 1
                });
            } else {
                hashStorage.remove('title');
                hashStorage.remove('page');
            }
        });

        function setInputFromHash(){
            const queryProps = hashStorage.get();
            input.value = queryProps.title || '';
        }

        setInputFromHash();

        window.addEventListener('hashchange', () => {
            setInputFromHash();
        });

        return dom;
    }
    
    renderTemplate() {
        return /*html*/ `
            <form class="search-form">
                <input class="search">
                <button>Submit</button>
            </form>
        `;
    }
}

export default Search;