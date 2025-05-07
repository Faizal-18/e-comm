// Navbar toggle
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => nav.classList.add('active'));
  if (close) close.addEventListener('click', () => nav.classList.remove('active'));
}

// Cart sidebar toggle
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');

if (cartIcon && cartSidebar) {
  cartIcon.addEventListener('click', (e) => {
    e.preventDefault();        // prevent jump
    cartSidebar.classList.add('active');
  });
}
// CART SIDEBAR TOGGLE
document.getElementById('lg-bag').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('cartSidebar').classList.add('active');
});

document.getElementById('closeCart').addEventListener('click', function () {
  document.getElementById('cartSidebar').classList.remove('active');
});

// MOBILE MENU TOGGLE
document.getElementById('bar').addEventListener('click', function () {
  document.getElementById('navbar').classList.add('active');
});

document.getElementById('close').addEventListener('click', function () {
  document.getElementById('navbar').classList.remove('active');
});


if (closeCart && cartSidebar) {
  closeCart.addEventListener('click', () => cartSidebar.classList.remove('active'));
}
