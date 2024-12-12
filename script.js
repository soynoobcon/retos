function addTocart(productName, price) {
    // Obtener el carrito actual desde localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Crear el objeto del producto
    let product = {
        name: productName,
        price: price
    };

    // Agregar el producto al carrito
    cart.push(product);

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Actualizar la vista del carrito flotante
    updateCart();
}

// Función para actualizar el carrito flotante
function updateCart() {
    // Obtener el carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Referencia al contenedor del carrito
    const cartContainer = document.getElementById('cart-content');

    // Limpiar el carrito antes de mostrar los nuevos productos
    cartContainer.innerHTML = '';

    // Variable para total
    let total = 0;

    // Mostrar los productos en el carrito flotante
    cart.forEach(product => {
        let productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <p>${product.name} - $${product.price}</p>
        `;
        cartContainer.appendChild(productElement);
        total += product.price;
    });

    // Vaciar carrito
    document.getElementById('empty-cart').addEventListener('click', () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    updateCartCount();
});

    // Mostrar el total
    document.getElementById('cart-total').textContent = total;
}

// Llamar a la función updateCart para cargar el carrito al cargar la página
if (document.getElementById('cart-content')) {
    updateCart();
}

// Contador de visitas
function updateVisitCount() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visit-count').innerText = visitCount;
}

//carrusel
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = carouselSlide.clientWidth;

function moveCarousel() {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

setInterval(moveCarousel, 3000);  