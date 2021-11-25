import { renderProducts } from './script.js'

export function searchFunc(data) {
    searchBtn.addEventListener('click', () => {
        const inputValue = input.value.toLocaleLowerCase();
        const result = data.filter((item) => {
            return item.title.toLocaleLowerCase().search(inputValue) > -1
        });

        renderProducts(result);
    })

    input.addEventListener('keyup', () => {
        const inputValue = input.value.toLocaleLowerCase();
        const result = data.filter((item) => item.title.toLocaleLowerCase().search(inputValue) > 1);
        if (input.value.trim() === '') {
            renderProducts(data);
        } else {
            renderProducts(result);
        }
    })

    sortSelect.addEventListener('change', () => {
        let result;
        switch (sortSelect.value) {
            case 'default':
                renderProducts(data);
                break;
            case 'az':
                result = data.sort((a, b) => (a.title > b.title) ? 1 : -1);
                renderProducts(result);
                break;
            case 'za':
                result = data.sort((a, b) => (a.name < b.name) ? 1 : -1);
                renderProducts(result);
                break;
            case 'paz':
                result = data.sort((a, b) => (a.price > b.price) ? 1 : -1);
                renderProducts(result);
                break;
            case 'pza':
                result = data.sort((a, b) => (a.price < b.price) ? 1 : -1);
                renderProducts(result);
                break;
        }
    })

}


const input = document.querySelector('.search_input')
const searchBtn = document.querySelector('.search_btn');
const sortSelect = document.querySelector('.sort_select');

