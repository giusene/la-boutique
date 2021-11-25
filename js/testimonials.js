export const getTestimonials = async () => {
    const res = await fetch("https://testimonialapi.toolcarton.com/api");
    const data = await res.json();
    testimonialsRender(data)
    console.log(data)
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
        <p class="rating">${element.rating}</p>
        <p class="message">${element.message.substring(50, length)}</p>`;
        wrapperTestimonials.appendChild(testimonialDiv);
    });
}

const wrapperTestimonials = document.querySelector('.wrapper_testimonials')