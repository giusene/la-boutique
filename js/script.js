import { slideGenerator } from './slider.js';
import { headerScolling } from './header.js';
import { hamburgerMenu } from './header.js';
import { addToCart } from './cart.js';
import { localProductsList } from './cart.js';

function createProduct(parent, imgUrl, productTitle, textPrice, idProduct) {
  const product = document.createElement("div");
  product.className = "product";

  const productOverlay = document.createElement('div');
  productOverlay.className = "product-overlay";

  createImg(product, imgUrl);
  createText(productOverlay, productTitle, textPrice);
  createCartBtn(productOverlay, idProduct);
  parent.appendChild(product);
  product.appendChild(productOverlay);
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
  const addToCartBtn = document.createElement('button');
  addToCartBtn.textContent = 'Add to Cart';
  addToCartBtn.setAttribute('id', idProduct);
  parent.append(addToCartBtn);

  addToCartBtn.addEventListener('click', () => {
    addToCart(parseInt(addToCartBtn.id))
  })

}

function renderProducts(listItems) {
  listItems.map((product) => {
    createProduct(wrapperProducts, product.image, product.title, product.price, product.id);
  });
}

const getProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  localProductsList(data);

  return renderProducts(data);
}


const wrapperProducts = document.querySelector(".wrapper__products");

getProductsList();
slideGenerator();
headerScolling();
hamburgerMenu();