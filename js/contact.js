export function contactFunction() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.classList.add('show');
        form.reset();
        setTimeout(()=> {
            modal.classList.remove('show');
        }, 3000)
    })
}


const form = document.querySelector('#contact-form');
const modal = document.querySelector('.contact-modal');

