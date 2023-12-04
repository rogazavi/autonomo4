let cart = [];
let total = 0;

function addToCart(productId) {
    // Simula obtener información del producto desde una base de datos
    let product = {
        id: productId,
        name: `Producto ${productId}`,
        price: 19.99 // Precio simulado
    };

    cart.push(product);
    total += product.price;

    updateCartUI();
}

function updateCartUI() {
    let cartItemsElement = document.getElementById('cart-items');
    let totalElement = document.getElementById('total');

    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;

    updateCartCount();
}

function updateCartCount() {
    let cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length;
}
