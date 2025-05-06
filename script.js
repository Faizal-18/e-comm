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

if (closeCart && cartSidebar) {
  closeCart.addEventListener('click', () => cartSidebar.classList.remove('active'));
}
