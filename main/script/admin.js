document.addEventListener('DOMContentLoaded', () => {
    console.log('Admin script loaded');

    const links = document.querySelectorAll('.link-button button a, .category-btn a');
    console.log('Найдено ссылок для обработки:', links.length);

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('href').split('/').pop().replace('.html', '');
            let type;

            console.log('Обработка ссылки для категории:', category, 'Элемент:', link);

            switch (category) {
                case 'monitor':
                    type = 'monitor';
                    break;
                case 'keyboard':
                    type = 'keyboard';
                    break;
                case 'mouse':
                    type = 'mouse';
                    break;
                case 'headphones':
                    type = 'headphones';
                    break;
                case 'pc':
                    type = 'pcs';
                    break;
                case 'note':
                    type = 'notebooks';
                    break;
                case 'smartfon':
                    type = 'electronics';
                    break;
                case 'planshet':
                    type = 'tablets';
                    break;
                case 'tv':
                    type = 'tvs';
                    break;
                case 'consol':
                    type = 'consoles';
                    break;
                case 'kolonki':
                    type = 'speakers';
                    break;
                default:
                    type = 'electronics';
            }

            console.log('Устанавливаем selectedCategory:', type);
            localStorage.setItem('selectedCategory', type);
            window.location.href = link.getAttribute('href');
        });
    });

    const cartCounter = document.getElementById('cart-counter');
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCounter.textContent = cartCount;

    function toggleAdminButtons() {
        const isAdmin = localStorage.getItem('isAdmin') === 'true';
        const adminHeaderButton = document.querySelector('.admin-button');

        if (adminHeaderButton) {
            if (isAdmin) {
                adminHeaderButton.style.display = 'block';
                console.log('Admin button shown');
            } else {
                localStorage.setItem('isAdmin', 'true'); // Для теста
                adminHeaderButton.style.display = 'block';
                console.log('Admin button enabled for testing');
            }
        } else {
            console.log('Admin button (.admin-button) not found in DOM');
        }
    }

    function attachAdminHeaderListener() {
        const adminAddButton = document.querySelector('.admin-button button');
        if (adminAddButton) {
            adminAddButton.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Admin button clicked, redirecting to /main/add-product.html');
                window.location.href = '/main/add-product.html';
            });
        } else {
            console.log('Admin button element (.admin-button button) not found in DOM');
        }
    }

    toggleAdminButtons();
    attachAdminHeaderListener();
});