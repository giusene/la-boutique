export function slideGenerator() {
    slides.forEach((item) =>{
        const slide = document.createElement('div');
        slide.className = '__img';
        slide.style.backgroundImage = `url(${item.url})`;
        slide.style.zIndex = zIndexCount;
        const overlay = document.createElement('div');
        overlay.className = '__overlay';
        overlay.style.zIndex = zIndexCount;
        const descDiv = document.createElement('div');
        descDiv.className = '__desc';
        
        const descTitle = document.createElement('h2');
        descTitle.textContent = item.title;
        
        const subTitle = document.createElement('p');
        subTitle.textContent = item.subtitle;
        
        overlay.appendChild(descDiv);
        descDiv.appendChild(descTitle);
        descDiv.appendChild(subTitle);

        heroWrapper.appendChild(slide);
        heroWrapper.appendChild(overlay);
        zIndexCount--;
    })
    slideTransition();
}

function slideTransition() {
    setTimeout(()=> {
        const firstSlide = heroWrapper.querySelector('.__img');
        const firstOverlay = heroWrapper.querySelector('.__overlay');
        firstSlide.classList.add('zero_opacity');
        firstOverlay.classList.add('zero_visibility');
        setTimeout(()=> {
            heroWrapper.removeChild(firstSlide);
            heroWrapper.removeChild(firstOverlay);
        }, 300);
        if (sliderCount === slides.length-1) {
            sliderCount = 0;
            slideGenerator();
        } else {
            sliderCount++;
            slideTransition();
        }
    }, 5000)
}


const slides = [
    {
        url: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'La moda non è un opinione',
        subtitle: 'Prima Slide'
    },
    {
        url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'La moda non è un opinione',
        subtitle: 'Seconda Slide'
    },
    {
        url: 'https://images.unsplash.com/photo-1596356453261-0d265ae2520a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'La moda non è un opinione',
        subtitle: 'Terza Slide'
    }
]

const heroWrapper = document.querySelector('.__hero');

let sliderCount = 0;
let zIndexCount = 99;
