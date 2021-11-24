export function headerScolling() {
    window.onscroll = function(e) {
        if (e.path[1].pageYOffset !== 0) {
            header.classList.add('display');
        } else {
            header.classList.remove('display');
        }
    };
}

const header = document.querySelector('header');