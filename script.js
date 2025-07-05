
const products = [
  { id: 1, name: 'Capacitor 100uF', price: 5 },
  { id: 2, name: 'Resistor 220Ω', price: 1 },
  { id: 3, name: '18650 Battery', price: 150 },
  { id: 4, name: 'Arduino Nano Module', price: 350 }
];

function loadProducts() {
  const list = document.getElementById('product-list');
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(product.name + " added to cart!");
}

window.onload = loadProducts;
