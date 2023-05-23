// Variables globales
const products = document.querySelectorAll('.product');
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');
let total = 0;

// Función para agregar una unidad al contador
function incrementQuantity(quantityInput) {
  const currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}

// Función para restar una unidad al contador
function decrementQuantity(quantityInput) {
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 0) {
    quantityInput.value = currentValue - 1;
  }
}

// Función para agregar un producto al carrito
function addToCart(product) {
  const productName = product.querySelector('h3').textContent;
  const quantity = parseInt(product.querySelector('.quantity-input').value);
  const price = parseFloat(product.querySelector('.price').textContent.replace(/[^\d.]/g, ''));

  if (quantity > 0) {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName}: ${quantity} unidad(es) - Precio: $${(price * quantity).toFixed(2)}`;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Quitar';
    removeBtn.addEventListener('click', () => {
      cartItem.remove();
      total -= price * quantity;
      updateTotal();
      resetQuantityInput(product);
    });

    cartItem.appendChild(removeBtn);
    cartItems.appendChild(cartItem);

    total += price * quantity;
    updateTotal();
  }
}

// Función para reiniciar el contador de cantidad
function resetQuantityInput(product) {
  const quantityInput = product.querySelector('.quantity-input');
  quantityInput.value = 0;
}

// Función para actualizar el total
function updateTotal() {
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Event listeners
products.forEach((product) => {
  const quantityInput = product.querySelector('.quantity-input');
  const plusBtn = product.querySelector('.plus-btn');
  const minusBtn = product.querySelector('.minus-btn');
  const addBtn = product.querySelector('.add-btn');

  plusBtn.addEventListener('click', () => {
    incrementQuantity(quantityInput);
  });

  minusBtn.addEventListener('click', () => {
    decrementQuantity(quantityInput);
  });

  addBtn.addEventListener('click', () => {
    addToCart(product);
  });
});

checkoutBtn.addEventListener('click', () => {
  const cartItemElements = cartItems.querySelectorAll('li');
  if (cartItemElements.length > 0) {
    const cartItemsText = Array.from(cartItemElements).map((item) => item.textContent);
    alert(`Productos en el carrito:\n${cartItemsText.join('\n')}\n${totalElement.textContent}`);
  } else {
    alert('El carrito está vacío.');
  }
});


// Menu-nav

eventListeners();
function eventListeners() {
    const menuNav = document.querySelector('.menu-nav');

    menuNav.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion-principal');

    navegacion.classList.toggle('mostrar');
}
