document.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById('bar');
  const close = document.getElementById('close');
  const nav = document.getElementById('navbar');

  if (bar) {
    bar.addEventListener('click', () => nav.classList.add('active'));
  }

  if (close) {
    close.addEventListener('click', () => nav.classList.remove('active'));
  }
});



// Carousel image switch
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel-img");
  let current = 0;

  setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }, 3000); // 3 seconds
});

// Banner auto-scroll pause on hover
const banner3 = document.getElementById("banner3");

banner3.addEventListener("mouseenter", () => {
  banner3.style.animationPlayState = "paused";
});

banner3.addEventListener("mouseleave", () => {
  banner3.style.animationPlayState = "running";
});

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("banner3");
  const copy = banner.innerHTML;
  banner.innerHTML += copy; // Clone banners
});

// Cart sidebar toggle
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');

if (cartIcon && cartSidebar) {
  cartIcon.addEventListener('click', (e) => {
    e.preventDefault(); // prevent jump
    cartSidebar.classList.add('active');
  });
}

if (closeCart && cartSidebar) {
  closeCart.addEventListener('click', () => cartSidebar.classList.remove('active'));
}

// ------------------------ 🛒 Add to Cart System ------------------------

const cartItems = [];

document.body.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-cart')) {
    const product = e.target.closest('.pro');
    const title = product.querySelector('h5').textContent;
    const price = product.querySelector('h4').textContent;
    const brand = product.querySelector('span').textContent;
    const imgSrc = product.querySelector('img').src;

    const item = { title, price, brand, imgSrc };
    cartItems.push(item);
    updateCartDisplay();
  }
});

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  const cartCountMobile = document.getElementById('cart-count-mobile');

  if (cartCount) cartCount.textContent = cartItems.length;
  if (cartCountMobile) cartCountMobile.textContent = cartItems.length;

  const cartList = document.getElementById('cart-items');
  if (!cartList) return;

  cartList.innerHTML = '';

  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.imgSrc}" style="width:50px;height:auto;">
      <div style="flex:1;">
        <strong>${item.brand}</strong><br>${item.title}<br><strong>${item.price}</strong>
      </div>
      <button data-index="${index}" class="remove-btn">Remove</button>
    `;
    cartList.appendChild(li);
  });
}


document.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const index = e.target.getAttribute('data-index');
    cartItems.splice(index, 1);
    updateCartDisplay();
  }
});

//mobile cart
const mobileCart = document.getElementById('mobile-cart');

if (mobileCart && cartSidebar) {
  mobileCart.addEventListener('click', (e) => {
    e.preventDefault();
    cartSidebar.classList.add('active');
  });
}
