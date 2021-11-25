export function headerScolling() {
    window.onscroll = function(e) {
        if (e.path[1].pageYOffset !== 0) {
            header.classList.add('display');
            menu.classList.remove('transparent');
        } else {
            header.classList.remove('display');
            menu.classList.add('transparent');
        }
    };
}

export function hamburgerMenu() {
    hamburgerBtn.addEventListener('click', () => {
        const hideMenu = () => {
            menu.classList.remove('show');
            hamburgerBtn.classList.remove('show');
        }
        const menuTimer = setTimeout(hideMenu, 4000)
        menu.classList.toggle('show');
        hamburgerBtn.classList.toggle('show');
        if (hamburgerBtn.classList.contains('show')) {
            menuTimer;
        } else {
            clearTimeout(menuTimer)
        }
    })
}

const menu = document.querySelector('.menu');
const hamburgerBtn = document.querySelector('.hamburger');
const header = document.querySelector('header');

    