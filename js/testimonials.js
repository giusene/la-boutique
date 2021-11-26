export const getTestimonials = async () => {
    const res = await fetch("https://testimonialapi.toolcarton.com/api");
    const data = await res.json();
    testimonialsRender(data)
  }



function testimonialsRender(data) {
    wrapperTestimonials.innerHTML = '';
    data.forEach(element => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial';
        testimonialDiv.innerHTML = `
        <img src="${element.avatar}" alt="${element.name}">
        <p class="name">${element.name}</p>
        <p class="designation">${element.designation}</p>
        <p class="rating">${element.rating} <span class="star"></span></p>
        <p class="message">${element.message.substring(47, length)}...</p>`;
        wrapperTestimonials.appendChild(testimonialDiv);
    });
    setInterval(()=>{
        wrapperTestimonials.scroll({
            left: leftScroll,
            behavior: 'smooth'
        });
        if (wrapperTestimonials.scrollLeft + wrapperTestimonials.offsetWidth < wrapperTestimonials.scrollWidth) {
            leftScroll+=300;
        } else {
            leftScroll = 0; 
        }
    }, 5000)
}



const wrapperTestimonials = document.querySelector('.wrapper_testimonials');
let leftScroll = 0;


