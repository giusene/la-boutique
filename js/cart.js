export function localProductsList(data) {
    productList = data.map((prod) => {
        prod.qty = 1;
        return prod;
    })
}

export function addToCart(productId) {
    const product = productList.find((product) => productId === product.id);
    const productInCart = cartList.find((product) => productId === product.id);
    if (productInCart === undefined) {
        cartList.push(product);
    } else {
        productInCart.qty++
    }
    showModal(product.title);
    cartRender()
}

function showModal(productName) {
    cartModal.classList.add('show');
    cartModal.textContent = `Hai aggiunto ${productName} al Carrello!`;
    setTimeout(() => {
        cartModal.classList.remove('show')
    }, 3000)
}

function cartRender() {
    if (cartList.length === 0) {
        domCartList.innerHTML = `<p>il tuo carrello è vuoto</p>`;
        cartBtn.className = 'cart-empty';
    } else {
        const totalProducts = cartList.reduce((a, b) => a + b.qty, 0);
        cartBtn.className = 'cart';
        cartBtn.setAttribute('data-after', `${totalProducts}`);
        domCartList.innerHTML = '';

        let removeBtnIndex = 0;
        cartList.forEach((product) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'X';
            removeBtn.setAttribute('index', `${removeBtnIndex}`);
            cartItem.appendChild(removeBtn);
            removeBtn.addEventListener('click', () => {
                cartList.splice(parseInt(removeBtn.getAttribute('index')), 1);
                window.localStorage.setItem('cart', JSON.stringify(cartList));
                cartRender();
            })
            removeBtnIndex++;
            const productName = document.createElement('div');
            productName.textContent = product.title;
            cartItem.appendChild(productName);

            const productQty = document.createElement('div');
            productQty.textContent = product.qty;
            cartItem.appendChild(productQty);

            const productPrice = document.createElement('div');
            productPrice.textContent = product.price + ' $';
            cartItem.appendChild(productPrice);

            const productTotPrice = document.createElement('div');
            productTotPrice.textContent = product.qty * product.price + ' $';
            cartItem.appendChild(productTotPrice);

            domCartList.appendChild(cartItem);
        });


        let totalPrice = 0;
        cartList.forEach((prod) => {
            totalPrice += prod.qty * prod.price
        })
        const cartTotal = document.createElement('div');
        cartTotal.className = 'cart-total';
        cartTotal.textContent = `Totale Carrello: ${totalPrice} $`;
        domCartList.appendChild(cartTotal);
        window.localStorage.setItem('cart', JSON.stringify(cartList));
    }
}




const cartModal = document.querySelector('.cart-modal');
const cartBtn = document.querySelector('#cart');

const domCartList = document.querySelector('.cart-list');
let cartList = [];
let productList = [];

cartBtn.addEventListener('click', () => {
    const hideCart = () => domCartList.classList.remove('show');
    const cartTimer = setTimeout(hideCart, 5000);

    domCartList.classList.toggle('show');
    if (domCartList.classList.contains('show')) {
        cartTimer;
    } else {
        clearTimeout(cartTimer)
    }
})


window.onload = function () {
    if (window.localStorage.getItem('cart')) {
        cartList = JSON.parse(window.localStorage.getItem('cart'));
        cartRender();
    }
};

