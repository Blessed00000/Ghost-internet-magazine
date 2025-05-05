// Проверка загрузки скрипта сразу
console.log('add-product.js начал загрузку');

document.addEventListener('DOMContentLoaded', () => {
    console.log('add-product.js: DOM полностью загружен');

    // Проверка доступности элементов с подробной отладкой
    const form = document.querySelector('.add-product-container form'); // Указываем конкретную форму
    const imageInput = document.getElementById('image');
    const preview = document.getElementById('preview');
    const category = document.getElementById('category');
    const title = document.getElementById('title');
    const details = document.getElementById('details');
    const price = document.getElementById('price');
    const submitButton = form ? form.querySelector('button[type="submit"]') : null;

    console.log('Проверка элементов:', {
        form: form ? 'Найден' : 'Не найден',
        imageInput: imageInput ? 'Найден' : 'Не найден',
        preview: preview ? 'Найден' : 'Не найден',
        category: category ? 'Найден' : 'Не найден',
        title: title ? 'Найден' : 'Не найден',
        details: details ? 'Найден' : 'Не найден',
        price: price ? 'Найден' : 'Не найден',
        submitButton: submitButton ? 'Найден' : 'Не найден'
    });

    if (!form || !imageInput || !preview || !category || !title || !details || !price || !submitButton) {
        console.error('Один или несколько элементов формы отсутствуют:', {
            form: !!form,
            imageInput: !!imageInput,
            preview: !!preview,
            category: !!category,
            title: !!title,
            details: !!details,
            price: !!price,
            submitButton: !!submitButton
        });
        alert('Ошибка: Проверь структуру HTML формы в DevTools (Элементы)!');
        return;
    }

    // Предпросмотр изображения
    imageInput.addEventListener('change', (e) => {
        console.log('Событие change на imageInput сработало');
        const file = e.target.files[0];
        if (file) {
            console.log('Выбран файл:', file.name, 'Тип:', file.type, 'Размер:', file.size);
            const reader = new FileReader();
            reader.onload = (e) => {
                console.log('Изображение успешно загружено в preview');
                preview.innerHTML = `<img src="${e.target.result}" style="max-width: 200px; max-height: 200px;">`;
                preview.style.display = 'block';
            };
            reader.onerror = (error) => console.error('Ошибка при чтении файла:', error);
            reader.readAsDataURL(file);
        } else {
            console.warn('Файл не выбран');
        }
    });

    // Проверка добавления слушателя события
    console.log('Добавление слушателя submit на форму');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Событие submit на форме сработало');
    
        const categoryValue = category.value;
        const titleValue = title.value;
        const imageFile = imageInput.files[0];
        const detailsValue = details.value.split('\n').filter(line => line.trim() !== '');
        const priceValue = price.value;
    
        console.log('Данные формы перед валидацией:', {
            categoryValue,
            titleValue,
            imageFile: imageFile ? imageFile.name : 'Не выбран',
            detailsValue,
            priceValue
        });
    
        if (!categoryValue || !titleValue || !imageFile || !detailsValue.length || !priceValue) {
            console.warn('Не все поля заполнены');
            alert('Заполните все поля!');
            return;
        }
    
        const reader = new FileReader();
        reader.onload = () => {
            console.log('Изображение преобразовано в DataURL');
            const newProduct = {
                id: Date.now(),
                title: titleValue,
                price: `${priceValue},00 ₽`,
                imgSrc: reader.result,
                details: detailsValue,
                type: categoryValue
            };
    
            console.log('Новый товар для добавления:', newProduct);
            if (!window.dbManager || typeof window.dbManager.addProduct !== 'function') {
                console.error('window.dbManager или addProduct не определены');
                alert('Ошибка: Модуль управления базой данных не загружен!');
                return;
            }
    
            const dbKey = window.dbManager.addProduct(newProduct);
            console.log('Товар добавлен в базу:', dbKey);
    
            if (!dbKey) {
                console.error('Ошибка: addProduct вернул undefined');
                alert('Ошибка при добавлении товара!');
                return;
            }
    
            alert(`Товар "${titleValue}" успешно добавлен в ${dbKey}!`);
            form.reset();
            if (preview) preview.style.display = 'none';
    
            // Обновляем рендер
            window.dbManager.renderProducts(categoryValue);
            console.log('Рендер обновлён для категории:', categoryValue);
    
            // Маппинг категорий для редиректа
            const categoryMap = {
                notebooks: 'notebook',
                tablets: 'planshet',
                pcs: 'pc',
                consoles: 'consol',
                speakers: 'kolonki',
                tvs: 'tv',
                monitor: 'monitor',
                mouse: 'mouse',
                headphones: 'headphones',
                keyboard: 'keyboard',
                electronics: 'smartfon'
            };
            const pageName = categoryMap[categoryValue] || categoryValue;
    
            // Редирект на страницу категории
            console.log('Редирект на:', `/main/catalog/${dbKey === 'electronicsDB' ? 'electronics' : dbKey === 'multimediaDB' ? 'multimedia' : 'pereferia'}/${pageName}.html`);
            window.location.href = `/main/catalog/${dbKey === 'electronicsDB' ? 'electronics' : dbKey === 'multimediaDB' ? 'multimedia' : 'pereferia'}/${pageName}.html`;
        };
        reader.onerror = (error) => console.error('Ошибка при чтении изображения:', error);
        reader.readAsDataURL(imageFile);
    });

    // Проверка доступности window.dbManager после загрузки
    console.log('window.dbManager доступен:', !!window.dbManager);

    // Тестовая проверка формы (для отладки)
    console.log('Форма готова к отправке:', form.outerHTML);
});