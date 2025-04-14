if (document.querySelector('.card-electronics') || document.querySelector('.sort-container')) {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Рендеринг запущен');

        // Определение категории на основе URL
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
        console.log('Текущая страница:', currentPage);

        let selectedCategory;
        switch (currentPage) {
            case 'monitor':
                selectedCategory = 'monitor';
                break;
            case 'mouse':
                selectedCategory = 'mouse';
                break;
            case 'headphones':
                selectedCategory = 'headphones';
                break;
            case 'keyboard':
                selectedCategory = 'keyboard';
                break;
            case 'pc':
                selectedCategory = 'pcs';
                break;
            case 'note':
                selectedCategory = 'notebooks';
                break;
            case 'smartfon':
                selectedCategory = 'electronics';
                break;
            case 'planshet':
                selectedCategory = 'tablets';
                break;
            case 'tv':
                selectedCategory = 'tvs';
                break;
            case 'consol':
                selectedCategory = 'consoles';
                break;
            case 'kolonki':
                selectedCategory = 'speakers';
                break;
            default:
                selectedCategory = 'electronics';
        }
        console.log('Установлена категория на основе URL:', selectedCategory);
        localStorage.setItem('selectedCategory', selectedCategory); 

        let className, targetContainer, dbKey;
        switch (selectedCategory) {
            case 'electronics':
            case 'tablets':
            case 'notebooks':
            case 'pcs':
                className = `product-card-${selectedCategory}`;
                targetContainer = document.querySelector(`.card-${selectedCategory}`) || document.createElement('div');
                targetContainer.className = `card-${selectedCategory}`;
                dbKey = 'electronicsDB';
                console.log('Выбрана база electronicsDB для', selectedCategory);
                break;
            case 'consoles':
            case 'speakers':
            case 'tvs':
                className = `product-card-${selectedCategory}`;
                targetContainer = document.querySelector(`.card-${selectedCategory}`) || document.createElement('div');
                targetContainer.className = `card-${selectedCategory}`;
                dbKey = 'multimediaDB';
                console.log('Выбрана база multimediaDB для', selectedCategory);
                break;
            case 'monitor':
            case 'mouse':
            case 'headphones':
            case 'keyboard':
                className = `product-card-${selectedCategory}`;
                targetContainer = document.querySelector(`.card-${selectedCategory}`) || document.createElement('div');
                targetContainer.className = `card-${selectedCategory}`;
                dbKey = 'pereferiaDB';
                console.log('Выбрана база pereferiaDB для', selectedCategory);
                break;
            default:
                className = 'product-card-electronics';
                targetContainer = document.querySelector('.card-electronics');
                dbKey = 'electronicsDB';
                console.log('По умолчанию выбрана база electronicsDB для', selectedCategory);
        }

        if (!document.querySelector(`.${targetContainer.className}`)) {
            document.body.insertBefore(targetContainer, document.querySelector('footer'));
        }

        function renderGoods(container, className, dbKey) {
            console.log(`Рендер для категории: ${selectedCategory}, база: ${dbKey}`);
            container.innerHTML = '';
            const db = JSON.parse(localStorage.getItem(dbKey)) || [];
            console.log(`Загружено ${db.length} товаров из ${dbKey}`);

            if (db.length === 0) {
                container.innerHTML = '<p>Нет товаров в этой категории.</p>';
                return;
            }

            db.forEach(good => {
                if (good.type === selectedCategory) {
                    const card = document.createElement('div');
                    card.className = className;
                    card.innerHTML = `
                        <div class="product-image-${className.replace('product-card-', '')}">
                            <img src="${good.imgSrc}" alt="${good.title}">
                        </div>
                        <div class="product-details-${className.replace('product-card-', '')}">
                            <a href=""><h2>${good.title}</h2></a>
                            <ul>${good.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
                        </div>
                        <p class="cena">${good.price}</p>
                        <a href="" class="btn btn-primary add-to-cart" data-id="${good.id}">В корзину</a>
                        <a href="/main/singlepage/${good.title.toLowerCase().replace(/ /g, '-')}.html" class="btn btn-secondary">Подробнее</a>
                        ${good.id > 106 ? `<button class="btn btn-danger delete-product" data-id="${good.id}">Удалить</button>` : ''}
                    `;
                    container.appendChild(card);
                }
            });

            attachCartListeners();
            attachDeleteListeners();
        }

        function attachCartListeners() {
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            const cartCounter = document.getElementById('cart-counter');

            let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
            cartCounter.textContent = cartCount;

            addToCartButtons.forEach(button => {
                button.addEventListener('click', event => {
                    event.preventDefault();
                    const card = event.target.closest(`.${className}`);
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
                    cartCount += 1;
                    cartCounter.textContent = cartCount;
                    localStorage.setItem('cartCount', cartCount);
                    const modal = document.getElementById('customModal');
                    modal.classList.add('show');
                });
            });
        }

        function attachDeleteListeners() {
            const deleteButtons = document.querySelectorAll('.delete-product');
            deleteButtons.forEach(button => {
                button.addEventListener('click', event => {
                    const productId = event.target.dataset.id;
                    console.log(`Попытка удалить товар с id: ${productId}`);

                    if (window.dbManager && typeof window.dbManager.deleteProduct === 'function') {
                        window.dbManager.deleteProduct(productId, selectedCategory, dbKey);
                        alert('Товар удалён!');
                        renderGoods(targetContainer, className, dbKey);
                    } else {
                        console.error('window.dbManager.deleteProduct не определён');
                        alert('Ошибка: невозможно удалить товар!');
                    }
                });
            });
        }

        const modal = document.getElementById('customModal');
        const continueBtn = document.getElementById('continueShopping');
        const cartBtn = document.getElementById('goToCart');

        continueBtn.addEventListener('click', () => modal.classList.remove('show'));
        cartBtn.addEventListener('click', () => window.location.href = '/main/korzina.html');
        modal.addEventListener('click', (e) => e.target === modal && modal.classList.remove('show'));

        document.getElementById('sort-order')?.addEventListener('change', function () {
            const sortOrder = this.value;
            const productCards = Array.from(document.querySelectorAll(`.${className}`));
            productCards.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.cena').textContent.replace(/[^\d.-]/g, ''));
                const priceB = parseFloat(b.querySelector('.cena').textContent.replace(/[^\d.-]/g, ''));
                return sortOrder === 'ascending' ? priceA - priceB : priceB - priceA;
            });
            productCards.forEach(card => targetContainer.appendChild(card));
        });

        window.dbManager.renderProducts = function (category) {
            localStorage.setItem('selectedCategory', category);
            renderGoods(targetContainer, className, dbKey);
        };

        renderGoods(targetContainer, className, dbKey);
    });
}