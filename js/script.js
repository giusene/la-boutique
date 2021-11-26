import { slideGenerator } from './slider.js';
import { headerScolling } from './header.js';
import { hamburgerMenu } from './header.js';
import { addToCart } from './cart.js';
import { localProductsList } from './cart.js';
import { searchFunc } from './search-filter.js';
import { getTestimonials } from './testimonials.js';
import { contactFunction } from './contact.js'

function createProduct(parent, imgUrl, productTitle, textPrice, idProduct) {
  const product = document.createElement("div");
  product.className = "product";
  product.classList.add('hidden');

  const productOverlay = document.createElement('div');
  productOverlay.className = "product-overlay";

  createImg(product, imgUrl);
  createText(productOverlay, productTitle, textPrice);
  createCartBtn(productOverlay, idProduct);
  product.appendChild(productOverlay);

  parent.appendChild(product);
  setTimeout(()=>{
    product.classList.remove('hidden');
  }, 600)
}

function createImg(parent, imgUrl) {
  parent.style.backgroundImage = `url(${imgUrl})`
}

function createText(parent, productTitle, textPrice) {
  const title = document.createElement("h4");
  title.textContent = productTitle;

  const price = document.createElement("h5");
  price.textContent = `${textPrice} $`;

  parent.append(title, price);
}

function createCartBtn(parent, idProduct) {
  const addToCartDiv = document.createElement('div');
  addToCartDiv.className = 'add-to-cart-div';
  parent.append(addToCartDiv);

  const plusBtn = document.createElement('a');
  plusBtn.className = 'qty-btn';
  plusBtn.textContent = '+';
  const qtyInput = document.createElement('input');
  qtyInput.setAttribute('type', 'number');
  qtyInput.setAttribute('value', '1');
  qtyInput.setAttribute('min', '1');
  qtyInput.className = 'qty-input';
  const minusBtn = document.createElement('a');
  minusBtn.className = 'qty-btn';
  minusBtn.textContent = '-';
  const addToCartBtn = document.createElement('button');
  addToCartBtn.textContent = 'Add to Cart';
  addToCartBtn.setAttribute('id', idProduct);

  addToCartDiv.append(minusBtn);
  addToCartDiv.append(qtyInput);
  addToCartDiv.append(plusBtn);
  addToCartDiv.append(addToCartBtn);

  minusBtn.addEventListener('click', () => {
    if (parseInt(qtyInput.value) > 1) {
      qtyInput.value--
    }
  })

  plusBtn.addEventListener('click', () => {
    qtyInput.value++
  })

  addToCartBtn.addEventListener('click', () => {
    addToCart(parseInt(addToCartBtn.id), parseInt(qtyInput.value));
    qtyInput.value = '1'
  })

}

export function renderProducts(listItems) {
  wrapperProducts.innerHTML = '';
  let productsTimer = 0;
  listItems.map((product) => {
    setTimeout(()=> {
      createProduct(wrapperProducts, product.image, product.title, product.price, product.id);
    }, productsTimer);
  productsTimer+=200;
  });
}

const getProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  localProductsList(data);
  searchFunc(data);

  return renderProducts(data);
}


const wrapperProducts = document.querySelector(".wrapper__products");

getProductsList();
slideGenerator();
headerScolling();
hamburgerMenu();
getTestimonials();
contactFunction();