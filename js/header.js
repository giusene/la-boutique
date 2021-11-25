export function headerScolling() {
    window.onscroll = function(e) {
        if (e.path[1].pageYOffset !== 0) {
            header.classList.add('display');
        } else {
            header.classList.remove('display');
        }
    };
}

export function hamburgerMenu() {
    hamburgerBtn.addEventListener('click', () => {
        menu.classList.toggle('show');
        hamburgerBtn.classList.toggle('show');
    })

}

const menu = document.querySelector('.menu');
const hamburgerBtn = document.querySelector('.hamburger');
const header = document.querySelector('header');