let goodsDB = [
    // Игровые консоли (type: "consoles")
    {
        id: 51,
        title: "Игровая консоль PlayStation 5 Pro",
        price: "124 999,00 ₽",
        imgSrc: "/main/image/PlayStation5Pro.webp",
        details: [
            "Накопитель(SSD): 2000gb",
            "Максимальная частота обновления экрана(Гц): 120",
            "Видеоразъемы: HDMI 2.1",
            "Цвет: Белая"
        ],
        type: "consoles"
    },
    {
        id: 52,
        title: "Игровая консоль PlayStation 4 Slim",
        price: "44 999,00 ₽",
        imgSrc: "/main/image/PlayStation4Slim.webp",
        details: [
            "Накопитель(SSD): 500gb",
            "Максимальная частота обновления экрана(Гц): 60",
            "Видеоразъемы: HDMI 1.4",
            "Цвет: Чёрный"
        ],
        type: "consoles"
    },
    {
        id: 53,
        title: "Игровая консоль PlayStation 5 Slim Digital Edition",
        price: "64 999,00 ₽",
        imgSrc: "/main/image/PlayStation5SlimDigitalEdition.webp",
        details: [
            "Накопитель(SSD): 1000gb",
            "Максимальная частота обновления экрана(Гц): 120",
            "Видеоразъемы: HDMI 2.1",
            "Цвет: Чёрный"
        ],
        type: "consoles"
    },
    {
        id: 54,
        title: "Игровая консоль Microsoft Xbox Series X",
        price: "66 999,00 ₽",
        imgSrc: "/main/image/MicrosoftXboxSeriesX.webp",
        details: [
            "Накопитель(SSD): 1000gb",
            "Максимальная частота обновления экрана(Гц): 120",
            "Видеоразъемы: HDMI 2.1",
            "Цвет: Чёрный"
        ],
        type: "consoles"
    },
    {
        id: 55,
        title: "Игровая консоль XBOX SERIES S 1 TB Carbon Black",
        price: "46 999,00 ₽",
        imgSrc: "/main/image/XBOXSERIESS1TBCarbonBlack.webp",
        details: [
            "Накопитель(SSD): 1000gb",
            "Максимальная частота обновления экрана(Гц): 120",
            "Видеоразъемы: HDMI 2.1",
            "Цвет: Чёрный"
        ],
        type: "consoles"
    },

    // Умные колонки (type: "speakers")
    {
        id: 56,
        title: "Умная колонка Яндекс.Станция Макс",
        price: "35 999,00 ₽",
        imgSrc: "/main/image/ЯндексСтанцияМакс.webp",
        details: [
            "Формат акустики: 2.1",
            "Формат подключения: Bluetooth",
            "Цвет: Чёрный"
        ],
        type: "speakers"
    },
    {
        id: 57,
        title: "Умная колонка Яндекс.Станция 2",
        price: "18 999,00 ₽",
        imgSrc: "/main/image/ЯндексСтанция2.webp",
        details: [
            "Формат акустики: 1",
            "Формат подключения: Bluetooth",
            "Цвет: Чёрный"
        ],
        type: "speakers"
    },
    {
        id: 58,
        title: "Умная колонка Яндекс.Станция Лайт 2",
        price: "6 299,00 ₽",
        imgSrc: "/main/image/ЯндексСтанцияЛайт2.webp",
        details: [
            "Формат акустики: 1",
            "Формат подключения: Bluetooth",
            "Цвет: Фиолетовый"
        ],
        type: "speakers"
    },
    {
        id: 59,
        title: "Аудиосистема Fiero Soundfall Mini HS400",
        price: "20 199,00 ₽",
        imgSrc: "/main/image/FieroSoundfallMiniHS400.webp",
        details: [
            "Формат акустики: 2.1",
            "Формат подключения: Bluetooth",
            "Цвет: Фиолетовый"
        ],
        type: "speakers"
    },
    {
        id: 60,
        title: "Аудиосистема Audio Pro A10 MkII",
        price: "22 299,00 ₽",
        imgSrc: "/main/image/AudioProA10MkII.webp",
        details: [
            "Формат акустики: 1.1",
            "Формат подключения: Bluetooth",
            "Цвет: Серый"
        ],
        type: "speakers"
    },
    {
        id: 61,
        title: "Умная колонка Новая Яндекс.Станция Мини",
        price: "8 199,00 ₽",
        imgSrc: "/main/image/НоваяЯндексСтанцияМини.webp",
        details: [
            "Формат акустики: 1",
            "Формат подключения: Bluetooth",
            "Цвет: Красный"
        ],
        type: "speakers"
    },
    {
        id: 62,
        title: "Умная колонка Яндекс.Станция Миди",
        price: "17 899,00 ₽",
        imgSrc: "/main/image/ЯндексСтанцияМиди.webp",
        details: [
            "Формат акустики: 2.1",
            "Формат подключения: Bluetooth",
            "Цвет: Розовый"
        ],
        type: "speakers"
    },

    // Телевизоры (type: "tvs")
    {
        id: 63,
        title: "LED-телевизор Xiaomi TV A Pro 55 2025",
        price: "44 999,00 ₽",
        imgSrc: "/main/image/Xiaomi TVAPro55.webp",
        details: [
            "Диагональ экрана (дюйм): 55",
            "Максимальное разрешение: 4K UltraHD",
            "Технология изготовления матрицы: OLED",
            "Максимальная частота обновления экрана(Гц): 60",
            "Видеоразъемы: HDMI х 3, USB х 1",
            "Цвет: Чёрный"
        ],
        type: "tvs"
    },
    {
        id: 64,
        title: "LED-телевизор TCL 55C755",
        price: "74 999,00 ₽",
        imgSrc: "/main/image/TCL55C755.webp",
        details: [
            "Диагональ экрана (дюйм): 55",
            "Максимальное разрешение: 4k",
            "Технология изготовления матрицы: OLED",
            "Максимальная частота обновления экрана(Гц): 120",
            "Видеоразъемы: HDMI х 4, USB х 1",
            "Цвет: Чёрный"
        ],
        type: "tvs"
    },
    {
        id: 65,
        title: "OLED-телевизор LG OLED48C4RLA",
        price: "134 999,00 ₽",
        imgSrc: "/main/image/LGOLED48C4RLA.webp",
        details: [
            "Диагональ экрана (дюйм): 48",
            "Максимальное разрешение: 4K",
            "Технология изготовления матрицы: OLED",
            "Максимальная частота обновления экрана(Гц): 120",
            "Видеоразъемы: HDMI х 4, USB х 3",
            "Цвет: Коричневый"
        ],
        type: "tvs"
    },
    {
        id: 66,
        title: "LED-телевизор Haier 32 Smart TV S2 PROL",
        price: "22 999,00 ₽",
        imgSrc: "/main/image/Haier 32 Smart TV S2PRO.webp",
        details: [
            "Диагональ экрана (дюйм): 32",
            "Максимальное разрешение: FullHD",
            "Технология изготовления матрицы: OLED",
            "Максимальная частота обновления экрана(Гц): 60",
            "Видеоразъемы: HDMI х 3, USB х 2 шт",
            "Цвет: Чёрный"
        ],
        type: "tvs"
    },
    {
        id: 67,
        title: "LED-телевизор Philips 50PUS8729/60",
        price: "66 999,00 ₽",
        imgSrc: "/main/image/Philips50PUS8729.webp",
        details: [
            "Диагональ экрана (дюйм): 50",
            "Максимальное разрешение: 4K",
            "Технология изготовления матрицы: OLED",
            "Максимальная частота обновления экрана(Гц): 120",
            "Видеоразъемы: HDMI х 4, USB х 2 шт",
            "Цвет: Серый"
        ],
        type: "tvs"
    },
    {
        id: 68,
        title: "LED-телевизор Samsung UE65DU7100UXRU",
        price: "80 999,00 ₽",
        imgSrc: "/main/image/SamsungUE65DU7100UXRU.webp",
        details: [
            "Диагональ экрана (дюйм): 65",
            "Максимальное разрешение: 4K",
            "Технология изготовления матрицы: OLED",
            "Максимальная частота обновления экрана(Гц): 60",
            "Видеоразъемы: HDMI х 3, USB х 1",
            "Цвет: Чёрный"
        ],
        type: "tvs"
    },
    {
        id: 69,
        title: "LED-телевизор Xiaomi TV A 65 2025",
        price: "54 999,00 ₽",
        imgSrc: "/main/image/XiaomiTVA652025.webp",
        details: [
            "Диагональ экрана (дюйм): 65",
            "Максимальное разрешение: 4K",
            "Технология изготовления матрицы: OLED",
            "Максимальная частота обновления экрана(Гц): 60",
            "Видеоразъемы: HDMI х 3, USB х 2",
            "Цвет: Чёрный"
        ],
        type: "tvs"
    },
    {
        id: 70,
        title: "OLED-телевизор LG OLED55B4RLA",
        price: "149 999,00 ₽",
        imgSrc: "/main/image/LGOLED55B4RLA.webp",
        details: [
            "Диагональ экрана (дюйм): 55",
            "Максимальное разрешение: 4K",
            "Технология изготовления матрицы: OLED",
            "Максимальная частота обновления экрана(Гц): 120",
            "Видеоразъемы: HDMI х 4, USB х 2",
            "Цвет: Чёрный"
        ],
        type: "tvs"
    },
    {
        id: 71,
        title: "LED-телевизор TCL 85C645",
        price: "120 999,00 ₽",
        imgSrc: "/main/image/TCL85C645.webp",
        details: [
            "Диагональ экрана (дюйм): 85",
            "Максимальное разрешение: 4K",
            "Технология изготовления матрицы: OLED",
            "Максимальная частота обновления экрана(Гц): 60",
            "Видеоразъемы: DisplayPort 1.4 x1, HDMI 2.0 x1 USB х1",
            "Цвет: Серый"
        ],
        type: "tvs"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.card-electronics');
    const selectedCategory = localStorage.getItem('selectedCategory') || 'consoles'; // По умолчанию консоли

    // Определяем класс и контейнер в зависимости от категории
    let className, targetContainer;
    switch (selectedCategory) {
        case 'consoles':
            className = 'product-card-consoles';
            targetContainer = document.querySelector('.card-consoles') || document.createElement('div');
            targetContainer.className = 'card-consoles';
            break;
        case 'speakers':
            className = 'product-card-speakers';
            targetContainer = document.querySelector('.card-speakers') || document.createElement('div');
            targetContainer.className = 'card-speakers';
            break;
        case 'tvs':
            className = 'product-card-tvs';
            targetContainer = document.querySelector('.card-tvs') || document.createElement('div');
            targetContainer.className = 'card-tvs';
            break;
        default:
            className = 'product-card-consoles';
            targetContainer = document.querySelector('.card-consoles');
    }

    if (!document.querySelector(`.${targetContainer.className}`)) {
        document.body.insertBefore(targetContainer, document.querySelector('footer'));
    }

    // Функция для рендера товаров
    function renderGoods(goods, container, className) {
        container.innerHTML = '';
        goods.forEach(good => {
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
                    <a href="/main/singlepage/iphone15.html" class="btn btn-secondary">Подробнее</a>
                `;
                container.appendChild(card);
            }
        });

        attachCartListeners();
    }

    // Функция для привязки слушателей к кнопкам "Добавить в корзину"
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

    // Модальное окно
    const modal = document.getElementById('customModal');
    const continueBtn = document.getElementById('continueShopping');
    const cartBtn = document.getElementById('goToCart');

    continueBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    cartBtn.addEventListener('click', () => {
        window.location.href = '/main/korzina.html';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Сортировка
    document.getElementById('sort-order')?.addEventListener('change', function () {
        const sortOrder = this.value;
        const productCards = Array.from(document.querySelectorAll(`.${className}`));
        const container = targetContainer;

        productCards.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.cena').textContent.replace(/[^\d.-]/g, ''));
            const priceB = parseFloat(b.querySelector('.cena').textContent.replace(/[^\d.-]/g, ''));

            return sortOrder === 'ascending' ? priceA - priceB : priceB - priceA;
        });

        productCards.forEach(card => container.appendChild(card));
    });

    // Рендерим товары выбранной категории
    renderGoods(goodsDB, targetContainer, className);
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-button button a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('href').split('/').pop().replace('.html', '');
            let type;

            switch (category) {
                case 'consoles': // Предполагаемый путь: /main/catolog/multimedia/consoles.html
                    type = 'consoles';
                    break;
                case 'speakers': // Предполагаемый путь: /main/catolog/multimedia/speakers.html
                    type = 'speakers';
                    break;
                case 'tvs': // Предполагаемый путь: /main/catolog/multimedia/tvs.html
                    type = 'tvs';
                    break;
                default:
                    type = 'consoles';
            }

            localStorage.setItem('selectedCategory', type);
            window.location.href = link.getAttribute('href');
        });
    });

    const cartCounter = document.getElementById('cart-counter');
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCounter.textContent = cartCount;
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const link = button.querySelector('a');
            let type;

            if (button.classList.contains('tv-btn')) {
                type = 'tvs';
            } else if (button.classList.contains('consoles-btn')) {
                type = 'consoles';
            } else if (button.classList.contains('speakers-btn')) {
                type = 'speakers';
            }

            localStorage.setItem('selectedCategory', type);
            window.location.href = link.getAttribute('href');
        });
    });

    const cartCounter = document.getElementById('cart-counter');
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCounter.textContent = cartCount;
});