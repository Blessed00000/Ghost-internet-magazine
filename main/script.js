document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('customModal');
    const continueBtn = document.getElementById('continueShopping');
    const cartBtn = document.getElementById('goToCart');

    continueBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    cartBtn.addEventListener('click', () => {
        window.location.href = '/main/korzina.html';
    });

    // Закрытие модалки при клике вне области
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    const scrollToCard = (containerSelector, direction) => {
        const container = document.querySelector(containerSelector);
        const card = container.querySelector('.card');
        const cardWidth = card.offsetWidth + parseFloat(getComputedStyle(card).marginRight);
        container.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    };

    document.getElementById('scroll-left')?.addEventListener('click', () => {
        scrollToCard('.card-container', -1);
    });

    document.getElementById('scroll-right')?.addEventListener('click', () => {
        scrollToCard('.card-container', 1);
    });

    document.getElementById('scroll-left-2')?.addEventListener('click', () => {
        scrollToCard('.card-container-2', -1);
    });

    document.getElementById('scroll-right-2')?.addEventListener('click', () => {
        scrollToCard('.card-container-2', 1);
    });

    const addToCartButtons = document.querySelectorAll('.btn-primary');
    const cartCounter = document.getElementById('cart-counter');

    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCounter.textContent = cartCount;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', event => {
            const card = event.target.closest('.card');
            const title = card.querySelector('.card-title').textContent;
            const price = card.querySelector('.card-text').textContent;
            const imgSrc = card.querySelector('img').src;

            const product = { title, price, imgSrc, quantity: 1 };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const existingProduct = cart.find(item => item.title === product.title);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart));

            cartCount += 1;
            cartCounter.textContent = cartCount;
            localStorage.setItem('cartCount', cartCount);

            // Показываем модалку
            modal.classList.add('show');
        });
    });

    window.addEventListener('storage', () => {
        const updatedCount = parseInt(localStorage.getItem('cartCount')) || 0;
        cartCounter.textContent = updatedCount;
    });

    document.getElementById('sort-order')?.addEventListener('change', function () {
        const sortOrder = this.value;
        const productCards = Array.from(document.querySelectorAll('.product-card-electronics'));
        const container = document.querySelector('.card-electronics');

        productCards.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.cena').textContent.replace(/[^\d.-]/g, ''));
            const priceB = parseFloat(b.querySelector('.cena').textContent.replace(/[^\d.-]/g, ''));

            return sortOrder === 'ascending' ? priceA - priceB : priceB - priceA;
        });

        productCards.forEach(card => container.appendChild(card));
    });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();

        const card = event.target.closest('.product-card-electronics');
        const title = card.querySelector('h2').textContent;
        const price = card.querySelector('.cena').textContent;
        const imgSrc = card.querySelector('img').src;

        const product = { title, price, imgSrc, quantity: 1 };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProduct = cart.find(item => item.title === product.title);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        document.getElementById('cart-counter').textContent = cartCount;
        localStorage.setItem('cartCount', cartCount);

        // Показываем модалку
        const modal = document.getElementById('customModal');
        modal.classList.add('show');
    });
});


document.querySelector('.burger-btn').addEventListener('click', function() {
    document.querySelector('.menu-items').classList.toggle('active');
});