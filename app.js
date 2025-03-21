async function fetchProducts() {
    const response = await fetch("http://localhost:3000/products");
    const products = await response.json();
    const container = document.getElementById("productContainer");

    container.innerHTML = products.map(product => `
        <div class="product-box">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Quantity: ${product.quantity}</p>
            <p>Price: $${product.price}</p>
        </div>
    `).join('');
}

fetchProducts();

