document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let total = 0;

    function updateCartCount() {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        localStorage.setItem('cartCount', totalCount);
    }

    // Рендеринг корзины
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center mt-5">
                <h3>Ваша корзина пуста</h3>
                <p>Добавьте товары из нашего каталога!</p>
                <a href="/index.html" class="btn btn-primary">Перейти в каталог</a>
            </div>
        `;
    } else {
        cart.forEach((item, index) => {
            const card = document.createElement('div');
            card.classList.add('col-md-4');
            card.innerHTML = `
                <div class="card">
                <img src="${item.imgSrc}" class="card-img-top" alt="${item.title}" style="width: 300px; height: 200px; object-fit: contain;">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.price}</p>
                        <div class="quantity-control">
                            <button class="btn btn-secondary btn-decrease" data-index="${index}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="btn btn-secondary btn-increase" data-index="${index}">+</button>
                        </div>
                        <button class="btn btn-danger btn-remove" data-index="${index}">Удалить</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(card);

            total += item.quantity * parseFloat(item.price.replace(/[^0-9,.]/g, '').replace(',', '.'));
        });
    }

    cartTotalContainer.innerHTML = `<h3>Итого: ${total.toFixed(2)} ₽</h3>`;

    document.querySelectorAll('.btn-increase').forEach(button => {
        button.addEventListener('click', event => {
            const index = event.target.dataset.index;
            cart[index].quantity += 1;
            updateCart();
        });
    });

    document.querySelectorAll('.btn-decrease').forEach(button => {
        button.addEventListener('click', event => {
            const index = event.target.dataset.index;
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                const productTitle = cart[index].title;
                if (confirm(`Вы уверены, что хотите удалить "${productTitle}" из корзины?`)) {
                    cart.splice(index, 1);
                }
            }
            updateCart();
        });
    });

    document.querySelectorAll('.btn-remove').forEach(button => {
        button.addEventListener('click', event => {
            const index = event.target.dataset.index;
            const productTitle = cart[index].title;
            if (confirm(`Вы уверены, что хотите удалить "${productTitle}" из корзины?`)) {
                cart.splice(index, 1);
                updateCart();
            }
        });
    });

    document.getElementById('checkout-button').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Корзина пуста!');
        } else {
            alert('Заказ оформлен! Спасибо за покупку!');
            localStorage.removeItem('cart');
            cart = [];
            updateCart();
        }
    });

    document.getElementById('clear-cart-button').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Корзина уже пуста!');
        } else if (confirm('Вы уверены, что хотите очистить корзину?')) {
            localStorage.removeItem('cart');
            localStorage.setItem('cartCount', '0');
            cart = [];
            updateCart();
            alert('Корзина очищена!');
        }
    });

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        window.location.reload();
    }

    updateCartCount();
});