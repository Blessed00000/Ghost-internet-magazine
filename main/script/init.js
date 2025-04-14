window.dbManager = {
    databases: {
        electronicsDB: 'electronicsDB',
        multimediaDB: 'multimediaDB',
        pereferiaDB: 'pereferiaDB'
    },


    initializeDB: function () {
        console.log('Инициализация баз данных...');
        if (!localStorage.getItem(this.databases.electronicsDB) || JSON.parse(localStorage.getItem(this.databases.electronicsDB)).length === 0) {
            console.log('Инициализация electronicsDB...');
            const electronicsDB = [

                {
                    id: 1,
                    title: "Смартфон Apple iPhone 15",
                    price: "67 490,00 ₽",
                    imgSrc: "/main/image/iphone15.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.1",
                        "Оперативная память (Гб): 6",
                        "Операционная система: IOS 17",
                        "Фотокамера (МПикс): 48 + 12 (двойная)",
                        "Встроенная память: 128Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "electronics"
                },
                {
                    id: 2,
                    title: "Смартфон Apple iPhone 12",
                    price: "58 590,00 ₽",
                    imgSrc: "/main/image/iphone12.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.1",
                        "Оперативная память (Гб): 6",
                        "Операционная система: IOS 17",
                        "Фотокамера (МПикс): 48 + 12 (двойная)",
                        "Встроенная память: 128Gb",
                        "Цвет: Синий"
                    ],
                    type: "electronics"
                },
                {
                    id: 3,
                    title: "Смартфон Huawei Pura 70",
                    price: "59 990,00 ₽",
                    imgSrc: "/main/image/huaweipura70.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.6",
                        "Оперативная память (Гб): 12",
                        "Операционная система: Android 15",
                        "Фотокамера (МПикс): 50+13+12 (тройная)",
                        "Встроенная память: 256Gb",
                        "Цвет: Белый"
                    ],
                    type: "electronics"
                },
                {
                    id: 4,
                    title: "Смартфон Samsung Galaxy A55",
                    price: "38 990,00 ₽",
                    imgSrc: "/main/image/samsungA55.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.6",
                        "Оперативная память (Гб): 8",
                        "Операционная система: Android 15",
                        "Фотокамера (МПикс): 32",
                        "Встроенная память: 256Gb",
                        "Цвет: Синий"
                    ],
                    type: "electronics"
                },
                {
                    id: 5,
                    title: "Смартфон Xiaomi Poco M6",
                    price: "14 490,00 ₽",
                    imgSrc: "/main/image/xiaomim6.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.79",
                        "Оперативная память (Гб): 8",
                        "Операционная система: Android 15",
                        "Фотокамера (МПикс): 108+2 (двойная)",
                        "Встроенная память: 256Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "electronics"
                },
                {
                    id: 6,
                    title: "Смартфон INFINIX Hot 50",
                    price: "16 990,00 ₽",
                    imgSrc: "/main/image/infinixhot50.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.78",
                        "Оперативная память (Гб): 6",
                        "Операционная система: Android 15",
                        "Фотокамера (МПикс): 50",
                        "Встроенная память: 256Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "electronics"
                },
                {
                    id: 7,
                    title: "Смартфон Xiaomi Note 13",
                    price: "18 490,00 ₽",
                    imgSrc: "/main/image/xiaominote13.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.67",
                        "Оперативная память (Гб): 6",
                        "Операционная система: Android 15",
                        "Фотокамера (МПикс): 108+8+2 (тройная)",
                        "Встроенная память: 128Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "electronics"
                },
                {
                    id: 8,
                    title: "Смартфон REALME C61",
                    price: "10 990,00 ₽",
                    imgSrc: "/main/image/realmec61.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.74",
                        "Оперативная память (Гб): 6",
                        "Операционная система: Android 15",
                        "Фотокамера (МПикс): 50+0.08 (двойная)",
                        "Встроенная память: 128Gb",
                        "Цвет: Зелёный"
                    ],
                    type: "electronics"
                },
                {
                    id: 9,
                    title: "Смартфон Xiaomi Redmi 14C",
                    price: "13 990,00 ₽",
                    imgSrc: "/main/image/xiaomi14c.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.88",
                        "Оперативная память (Гб): 8",
                        "Операционная система: IOS 17",
                        "Фотокамера (МПикс): 50+2+0.08 (тройная)",
                        "Встроенная память: 258Gb",
                        "Цвет: Синий"
                    ],
                    type: "electronics"
                },
                {
                    id: 10,
                    title: "Смартфон Samsung Galaxy S21 FE",
                    price: "42 990,00 ₽",
                    imgSrc: "/main/image/SamsungGalaxyS21FE.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.4",
                        "Оперативная память (Гб): 8",
                        "Операционная система: Android 15",
                        "Фотокамера (МПикс): 12+12+8 (тройная)",
                        "Встроенная память: 128Gb",
                        "Цвет: графит"
                    ],
                    type: "electronics"
                },
                {
                    id: 11,
                    title: "Смартфон Honor 90",
                    price: "36 160,00 ₽",
                    imgSrc: "/main/image/Honor90.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.7",
                        "Оперативная память (Гб): 12",
                        "Операционная система: Android 15",
                        "Фотокамера (МПикс): 200+12+2 (тройная)",
                        "Встроенная память: 512Gb",
                        "Цвет: Изумрудный зеленый"
                    ],
                    type: "electronics"
                },
                {
                    id: 12,
                    title: "Смартфон TECNO Spark 20 Pro",
                    price: "16 990,00 ₽",
                    imgSrc: "/main/image/TECNOSpark 20Pro.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.78",
                        "Оперативная память (Гб): 8",
                        "Операционная система: Android 14",
                        "Фотокамера (МПикс): 108+2+0.08 (тройная)",
                        "Встроенная память: 256Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "electronics"
                },
                {
                    id: 13,
                    title: "Смартфон TECNO Pova 6 Pro 5G",
                    price: "23 990,00 ₽",
                    imgSrc: "/main/image/TECNOPova6Pro.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.78",
                        "Оперативная память (Гб): 12",
                        "Операционная система: Android",
                        "Фотокамера (МПикс): 108+2+0.08 (тройная)",
                        "Встроенная память: 256Gb",
                        "Цвет: Зеленый"
                    ],
                    type: "electronics"
                },
                {
                    id: 14,
                    title: "Смартфон Samsung Galaxy A35",
                    price: "27 990,00 ₽",
                    imgSrc: "/main/image/SamsungGalaxyA35.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.6",
                        "Оперативная память (Гб): 8",
                        "Операционная система: Android 14",
                        "Фотокамера (МПикс): 50+8+5 (тройная)",
                        "Встроенная память: 128Gb",
                        "Цвет: Лаванда"
                    ],
                    type: "electronics"
                },
                {
                    id: 15,
                    title: "Смартфон INFINIX Note 40 Pro",
                    price: "25 990,00 ₽",
                    imgSrc: "/main/image/INFINIXNote40Pro.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.78",
                        "Оперативная память (Гб): 8",
                        "Операционная система: Android 14",
                        "Фотокамера (МПикс): 108+2+2 (тройная)",
                        "Встроенная память: 256Gb",
                        "Цвет: Зеленый"
                    ],
                    type: "electronics"
                },
                {
                    id: 16,
                    title: "Смартфон Xiaomi Redmi Note 13 Pro",
                    price: "48 990,00 ₽",
                    imgSrc: "/main/image/XiaomiRedmiNote13Pro.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.67",
                        "Оперативная память (Гб): 12",
                        "Операционная система: Android 15",
                        "Фотокамера (МПикс): 200+8+2 (тройная)",
                        "Встроенная память: 512Gb",
                        "Цвет: Белый"
                    ],
                    type: "electronics"
                },
                {
                    id: 17,
                    title: "Смартфон Xiaomi Poco F6 Pro",
                    price: "49 990,00 ₽",
                    imgSrc: "/main/image/XiaomiPocoF6Pro.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.67",
                        "Оперативная память (Гб): 12",
                        "Операционная система: Android 14",
                        "Фотокамера (МПикс): 50+8+2 (тройная)",
                        "Встроенная память: 256Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "electronics"
                },
                {
                    id: 18,
                    title: "Смартфон Honor X8b",
                    price: "22 990,00 ₽",
                    imgSrc: "/main/image/HonorX8b.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.7",
                        "Оперативная память (Гб): 8",
                        "Операционная система: IOS 17",
                        "Фотокамера (МПикс): 108+5+2 (тройная)",
                        "Встроенная память: 256Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "electronics"
                },
                // Планшеты
                {
                    id: 19,
                    title: "Планшет Samsung Galaxy Tab S10+",
                    price: "120 990,00 ₽",
                    imgSrc: "/main/image/SamsungGalaxyTabS10+.webp",
                    details: [
                        "Диагональ экрана (дюйм): 6.1",
                        "Оперативная память (Гб): 12",
                        "Операционная система: Android 14",
                        "Фотокамера (МПикс): 13",
                        "Встроенная память: 256Gb",
                        "Цвет: Серебристый"
                    ],
                    type: "tablets"
                },
                {
                    id: 20,
                    title: "Планшет Apple iPad 2021 Wi-Fi A2602",
                    price: "29 990,00 ₽",
                    imgSrc: "/main/image/AppleiPad2021.webp",
                    details: [
                        "Диагональ экрана (дюйм): 10.2",
                        "Оперативная память (Гб): 3",
                        "Операционная система: IOS 17",
                        "Фотокамера (МПикс): 8",
                        "Встроенная память: 64Gb",
                        "Цвет: Серый космос"
                    ],
                    type: "tablets"
                },
                {
                    id: 21,
                    title: "Планшет Huawei MatePad Pro MRO-W09",
                    price: "79 990,00 ₽",
                    imgSrc: "/main/image/HuaweiMatePadPro.webp",
                    details: [
                        "Диагональ экрана (дюйм): 12.2",
                        "Оперативная память (Гб): 12",
                        "Операционная система: Android 14",
                        "Фотокамера (МПикс): 13",
                        "Встроенная память: 256Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "tablets"
                },
                {
                    id: 22,
                    title: "Планшет TECLAST T65Max",
                    price: "67 490,00 ₽",
                    imgSrc: "/main/image/TECLASTT65Max.webp",
                    details: [
                        "Диагональ экрана (дюйм): 12.95",
                        "Оперативная память (Гб): 8",
                        "Операционная система: Android 15",
                        "Фотокамера (МПикс): 13",
                        "Встроенная память: 256Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "tablets"
                },
                {
                    id: 23,
                    title: "Планшет Samsung Galaxy Tab A9+",
                    price: "23 590,00 ₽",
                    imgSrc: "/main/image/SamsungGalaxyTabA9+.webp",
                    details: [
                        "Диагональ экрана (дюйм): 11",
                        "Оперативная память (Гб): 8",
                        "Операционная система: Android 14",
                        "Фотокамера (МПикс): 8",
                        "Встроенная память: 128Gb",
                        "Цвет: Серебристый"
                    ],
                    type: "tablets"
                },
                {
                    id: 24,
                    title: "Планшет Honor Pad 8 Hendry-W09D",
                    price: "20 990,00 ₽",
                    imgSrc: "/main/image/HonorPad8.webp",
                    details: [
                        "Диагональ экрана (дюйм): 11.97",
                        "Оперативная память (Гб): 6",
                        "Операционная система: Android 14",
                        "Фотокамера (МПикс): 5",
                        "Встроенная память: 128Gb",
                        "Цвет: Синий"
                    ],
                    type: "tablets"
                },
                {
                    id: 25,
                    title: "Планшет Acer Gadget E10 ETPad",
                    price: "16 990,00 ₽",
                    imgSrc: "/main/image/AcerGadgetE10ETPad.webp",
                    details: [
                        "Диагональ экрана (дюйм): 10.95",
                        "Оперативная память (Гб): 8",
                        "Операционная система: Android 14",
                        "Фотокамера (МПикс): 13",
                        "Встроенная память: 128Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "tablets"
                },
                // Ноутбуки
                {
                    id: 26,
                    title: "Ноутбук MSI Katana GF76",
                    price: "95 999,00 ₽",
                    imgSrc: "/main/image/MSIKatanaGF76.webp",
                    details: [
                        "Диагональ экрана (дюйм): 17.3",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 3050 для ноутбуков",
                        "Модель процессора: Intel Core i5-12450H",
                        "Разрешение экрана: 1920x1080",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Общий объем твердотельных накопителей (SSD): 512Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 27,
                    title: "Ноутбук ASUS Vivobook Go 15",
                    price: "47 999,00 ₽",
                    imgSrc: "/main/image/ASUSVivobookGo15.webp",
                    details: [
                        "Диагональ экрана (дюйм): 15.6",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: AMD Radeon 610M",
                        "Модель процессора: AMD Ryzen 5 7520U",
                        "Разрешение экрана: 1920x1080",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Общий объем твердотельных накопителей (SSD): 512Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 28,
                    title: "Ноутбук ASUS TUF Gaming F15",
                    price: "91 999,00 ₽",
                    imgSrc: "/main/image/ASUSTUFGamingF15.webp",
                    details: [
                        "Диагональ экрана (дюйм): 15.6",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 3050 для ноутбуков",
                        "Модель процессора: Intel Core i5-12500H",
                        "Разрешение экрана: 1920x1080",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Общий объем твердотельных накопителей (SSD): 512Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 29,
                    title: "Ноутбук ASUS TUF Gaming A15",
                    price: "106 999,00 ₽",
                    imgSrc: "/main/image/ASUSTUFGamingA15.webp",
                    details: [
                        "Диагональ экрана (дюйм): 15.6",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 4050 для ноутбуков",
                        "Модель процессора: AMD Ryzen 5 7535HS",
                        "Разрешение экрана: 1920x1080",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Общий объем твердотельных накопителей (SSD): 512Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 30,
                    title: "Ноутбук ASUS ROG Strix G18",
                    price: "181 999,00 ₽",
                    imgSrc: "/main/image/ASUSROGStrixG18.webp",
                    details: [
                        "Диагональ экрана (дюйм): 18",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 4060 для ноутбуков",
                        "Модель процессора: i7-13650HX",
                        "Разрешение экрана: 2560x1600",
                        "Максимальная частота обновления экрана(Гц): 240",
                        "Общий объем твердотельных накопителей (SSD): 1000Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 31,
                    title: "Ноутбук MSI GF76 Katana",
                    price: "83 999,00 ₽",
                    imgSrc: "/main/image/MSIGF76Katana.webp",
                    details: [
                        "Диагональ экрана (дюйм): 17.3",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 2050 для ноутбуков",
                        "Модель процессора: Intel Core i5-12450H",
                        "Разрешение экрана: 1920x1080",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Общий объем твердотельных накопителей (SSD): 256Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 32,
                    title: "Ноутбук ARDOR GAMING NEO",
                    price: "74 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMIN NEO.webp",
                    details: [
                        "Диагональ экрана (дюйм): 17.3",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 2050 для ноутбуков",
                        "Модель процессора: Intel Core i5-12600H",
                        "Разрешение экрана: 1920x1080",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Общий объем твердотельных накопителей (SSD): 512Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 33,
                    title: "Ноутбук ASUS TUF Gaming A15",
                    price: "83 999,00 ₽",
                    imgSrc: "/main/image/ASUSTUFGamingA15FA.webp",
                    details: [
                        "Диагональ экрана (дюйм): 15.6",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 3050 для ноутбуков",
                        "Модель процессора: Intel Core i5-12600H",
                        "Разрешение экрана: 1920x1080",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Общий объем твердотельных накопителей (SSD): 512Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 34,
                    title: "Ноутбук Acer Nitro 16",
                    price: "136 999,00 ₽",
                    imgSrc: "/main/image/AcerNitro16.webp",
                    details: [
                        "Диагональ экрана (дюйм): 16",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 4050 для ноутбуков",
                        "Модель процессора: Intel Core i7-13700H",
                        "Разрешение экрана: 2560x1600",
                        "Максимальная частота обновления экрана(Гц): 240",
                        "Общий объем твердотельных накопителей (SSD): 1000Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 35,
                    title: "Ноутбук ASUS ROG Strix G16",
                    price: "166 999,00 ₽",
                    imgSrc: "/main/image/ASUSROGStrixG16.webp",
                    details: [
                        "Диагональ экрана (дюйм): 16",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 4060 для ноутбуков",
                        "Модель процессора: Intel Core i7-13650H",
                        "Разрешение экрана: 2560x1600",
                        "Максимальная частота обновления экрана(Гц): 240",
                        "Общий объем твердотельных накопителей (SSD): 1000Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 36,
                    title: "Ноутбук ARDOR GAMING NEO G17",
                    price: "79 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGNEOG17.webp",
                    details: [
                        "Диагональ экрана (дюйм): 17.3",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 3050 для ноутбуков",
                        "Модель процессора: Intel Core i5-12450H",
                        "Разрешение экрана: 1920x1080",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Общий объем твердотельных накопителей (SSD): 512Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 37,
                    title: "Ноутбук GIGABYTE G6 MF",
                    price: "113 999,00 ₽",
                    imgSrc: "/main/image/GIGABYTEG6MF.webp",
                    details: [
                        "Диагональ экрана (дюйм): 16",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 4050 для ноутбуков",
                        "Модель процессора: Intel Core i5-13500H",
                        "Разрешение экрана: 1920x1080",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Общий объем твердотельных накопителей (SSD): 512Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 38,
                    title: "Ноутбук Acer Nitro V15",
                    price: "71 999,00 ₽",
                    imgSrc: "/main/image/AcerNitroV15.webp",
                    details: [
                        "Диагональ экрана (дюйм): 15.6",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 2050 для ноутбуков",
                        "Модель процессора: AMD Ryzen 5 7535HS",
                        "Разрешение экрана: 1920x1080",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Общий объем твердотельных накопителей (SSD): 512Gb"
                    ],
                    type: "notebooks"
                },
                {
                    id: 39,
                    title: "Ноутбук ARDOR GAMING NEO N15-I5ND402",
                    price: "99 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGNEON15-I5ND402.webp",
                    details: [
                        "Диагональ экрана (дюйм): 15.6",
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 4050 для ноутбуков",
                        "Модель процессора: Intel Core i5-12600H",
                        "Разрешение экрана: 1920x1080",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Общий объем твердотельных накопителей (SSD): 1024Gb"
                    ],
                    type: "notebooks"
                },

                {
                    id: 40,
                    title: "ПК ARDOR GAMING NEO M143",
                    price: "74 499,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGNEOM143.webp",
                    details: [
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 3050",
                        "Операционная система: без ОС",
                        "Модель процессора: Intel Core i5-12400F",
                        "Общий объем твердотельных накопителей (SSD): 1000Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "pcs"
                },
                {
                    id: 41,
                    title: "ПК ARDOR GAMING RAGE H335",
                    price: "113 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGRAGEH335.webp",
                    details: [
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 4060",
                        "Операционная система: без ОС",
                        "Модель процессора: Intel Core i5-13400F",
                        "Общий объем твердотельных накопителей (SSD): 1000Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "pcs"
                },
                {
                    id: 42,
                    title: "ПК ARDOR GAMING NEO M144",
                    price: "54 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGNEOM144.webp",
                    details: [
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce GTX 1650",
                        "Операционная система: без ОС",
                        "Модель процессора: Intel Core i3-12100F",
                        "Общий объем твердотельных накопителей (SSD): 500Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "pcs"
                },
                {
                    id: 43,
                    title: "ПК ARDOR GAMING RAGE H342",
                    price: "135 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGRAGEH342.webp",
                    details: [
                        "Оперативная память (Гб): 32",
                        "Модель дискретной видеокарты: GeForce RTX 4060 Ti",
                        "Операционная система: без ОС",
                        "Модель процессора: Intel Core i5-13400F",
                        "Общий объем твердотельных накопителей (SSD): 1500Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "pcs"
                },
                {
                    id: 44,
                    title: "ПК ARDOR GAMING RAGE H348",
                    price: "134 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMING RAGEH348.webp",
                    details: [
                        "Оперативная память (Гб): 32",
                        "Модель дискретной видеокарты: GeForce RTX 4060 Ti",
                        "Операционная система: без ОС",
                        "Модель процессора: AMD Ryzen 5 7500F",
                        "Общий объем твердотельных накопителей (SSD): 1000Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "pcs"
                },
                {
                    id: 45,
                    title: "ПК ARDOR GAMING NEO M147",
                    price: "94 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGNEOM147.webp",
                    details: [
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 4060",
                        "Операционная система: без ОС",
                        "Модель процессора: Intel Core i3-13100F",
                        "Общий объем твердотельных накопителей (SSD): 1000Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "pcs"
                },
                {
                    id: 46,
                    title: "ПК ARDOR GAMING EVO X076",
                    price: "265 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGEVOX076.webp",
                    details: [
                        "Оперативная память (Гб): 32",
                        "Модель дискретной видеокарты: GeForce RTX 4070 Ti SUPER",
                        "Операционная система: без ОС",
                        "Модель процессора: Intel Core i7-14700KF",
                        "Общий объем твердотельных накопителей (SSD): 2000Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "pcs"
                },
                {
                    id: 47,
                    title: "ПК DEXP Mars G001",
                    price: "41 299,00 ₽",
                    imgSrc: "/main/image/DEXPMarsG001.webp",
                    details: [
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: Встроенная vega 7",
                        "Операционная система: без ОС",
                        "Модель процессора: AMD Ryzen 5 5600G",
                        "Общий объем твердотельных накопителей (SSD): 512Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "pcs"
                },
                {
                    id: 48,
                    title: "ПК ARDOR GAMING EVO X075",
                    price: "333 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGEVOX075.webp",
                    details: [
                        "Оперативная память (Гб): 64",
                        "Модель дискретной видеокарты: GeForce RTX 4080 SUPER",
                        "Операционная система: без ОС",
                        "Модель процессора: Intel Core i9-14900KF",
                        "Общий объем твердотельных накопителей (SSD): 2500Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "pcs"
                },
                {
                    id: 49,
                    title: "ПК ARDOR GAMING EVO X077",
                    price: "234 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGEVOX077.webp",
                    details: [
                        "Оперативная память (Гб): 32",
                        "Модель дискретной видеокарты: GeForce RTX 4070 SUPER",
                        "Операционная система: без ОС",
                        "Модель процессора: Intel Core i7-14700KF",
                        "Общий объем твердотельных накопителей (SSD): 2000Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "pcs"
                },
                {
                    id: 50,
                    title: "ПК ARDOR GAMING RAGE H346",
                    price: "113 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGRAGEH346.webp",
                    details: [
                        "Оперативная память (Гб): 16",
                        "Модель дискретной видеокарты: GeForce RTX 4060",
                        "Операционная система: без ОС",
                        "Модель процессора: Intel Core i5-13400F",
                        "Общий объем твердотельных накопителей (SSD): 1000Gb",
                        "Цвет: Чёрный"
                    ],
                    type: "pcs"
                }
            ];
            localStorage.setItem(this.databases.electronicsDB, JSON.stringify(electronicsDB));
        }
        if (!localStorage.getItem(this.databases.multimediaDB) || JSON.parse(localStorage.getItem(this.databases.multimediaDB)).length === 0) {
            console.log('Инициализация multimediaDB...');
            const multimediaDB = [

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
            localStorage.setItem(this.databases.multimediaDB, JSON.stringify(multimediaDB));
        }
        if (!localStorage.getItem(this.databases.pereferiaDB) || JSON.parse(localStorage.getItem(this.databases.pereferiaDB)).length === 0) {
            console.log('Инициализация pereferiaDB...');
            const pereferiaDB = [

                {
                    id: 72,
                    title: "Монитор DEXP DF22N2S",
                    price: "7 699,00 ₽",
                    imgSrc: "/main/image/DEXPDF22N2S.webp",
                    details: [
                        "Диагональ экрана (дюйм): 21.45",
                        "Максимальное разрешение: 1920x1080",
                        "Технология изготовления матрицы: VA",
                        "Максимальная частота обновления экрана(Гц): 75",
                        "Видеоразъемы: HDMI, VGA (D-Sub)",
                        "Цвет: Чёрный"
                    ],
                    type: "monitor"
                },
                {
                    id: 73,
                    title: "Монитор ARDOR GAMING PORTAL",
                    price: "13 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGPORTAL.webp",
                    details: [
                        "Диагональ экрана (дюйм): 23.8",
                        "Максимальное разрешение: 1920x1080",
                        "Технология изготовления матрицы: VA",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Видеоразъемы: DisplayPort 1.4 x2, HDMI 2.0 x2",
                        "Цвет: Чёрный"
                    ],
                    type: "monitor"
                },
                {
                    id: 74,
                    title: "Монитор LG UltraGear",
                    price: "32 999,00 ₽",
                    imgSrc: "/main/image/LGUltraGear27GR75Q-B.webp",
                    details: [
                        "Диагональ экрана (дюйм): 27",
                        "Максимальное разрешение: 2560x1440",
                        "Технология изготовления матрицы: IPS",
                        "Максимальная частота обновления экрана(Гц): 165",
                        "Видеоразъемы: DisplayPort 1.4 x1, HDMI 2.0 x2",
                        "Цвет: Чёрный"
                    ],
                    type: "monitor"
                },
                {
                    id: 75,
                    title: "Монитор ARDOR GAMING PORTAL",
                    price: "14 399,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGPORTALAF24H1.webp",
                    details: [
                        "Диагональ экрана (дюйм): 23.8",
                        "Максимальное разрешение: 1920x1080",
                        "Технология изготовления матрицы: IPS",
                        "Максимальная частота обновления экрана(Гц): 144",
                        "Видеоразъемы: DisplayPort 1.4 x2, HDMI 2.0 x2",
                        "Цвет: Белый"
                    ],
                    type: "monitor"
                },
                {
                    id: 76,
                    title: "Монитор Xiaomi G27Qi",
                    price: "20 999,00 ₽",
                    imgSrc: "/main/image/XiaomiG27Qi.webp",
                    details: [
                        "Диагональ экрана (дюйм): 27",
                        "Максимальное разрешение: 2560x1440",
                        "Технология изготовления матрицы: IPS",
                        "Максимальная частота обновления экрана(Гц): 180",
                        "Видеоразъемы: DisplayPort 1.4 x2, HDMI 2.0 x2",
                        "Цвет: Чёрный"
                    ],
                    type: "monitor"
                },
                {
                    id: 77,
                    title: "Монитор ASUS TUF Gaming",
                    price: "38 999,00 ₽",
                    imgSrc: "/main/image/ASUSTUFGamingVG27AQ1A.webp",
                    details: [
                        "Диагональ экрана (дюйм): 27",
                        "Максимальное разрешение: 2560x1440",
                        "Технология изготовления матрицы: IPS",
                        "Максимальная частота обновления экрана(Гц): 170",
                        "Видеоразъемы: DisplayPort 1.4 x1, HDMI 2.0 x2",
                        "Цвет: Чёрный"
                    ],
                    type: "monitor"
                },
                {
                    id: 78,
                    title: "Монитор MSI G255F черный",
                    price: "15 499,00 ₽",
                    imgSrc: "/main/image/MSIG255F.webp",
                    details: [
                        "Диагональ экрана (дюйм): 24.5",
                        "Максимальное разрешение: 1920x1080",
                        "Технология изготовления матрицы: IPS",
                        "Максимальная частота обновления экрана(Гц): 180",
                        "Видеоразъемы: DisplayPort 1.2a x1, HDMI 2.0 x2",
                        "Цвет: Чёрный"
                    ],
                    type: "monitor"
                },
                {
                    id: 79,
                    title: "Монитор ARDOR GAMING SUPERNOVA PRO",
                    price: "32 999,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGSUPERNOVAPRO.webp",
                    details: [
                        "Диагональ экрана (дюйм): 31.5",
                        "Максимальное разрешение: 2560x1440",
                        "Технология изготовления матрицы: IPS",
                        "Максимальная частота обновления экрана(Гц): 165",
                        "Видеоразъемы: DisplayPort 1.4 x1, HDMI 2.0 x2 USB х3",
                        "Цвет: Чёрный"
                    ],
                    type: "monitor"
                },
                {
                    id: 80,
                    title: "Монитор Samsung Odyssey G5",
                    price: "33 999,00 ₽",
                    imgSrc: "/main/image/SamsungOdysseyG5.webp",
                    details: [
                        "Диагональ экрана (дюйм): 34",
                        "Максимальное разрешение: 3440x1440",
                        "Технология изготовления матрицы: VA",
                        "Максимальная частота обновления экрана(Гц): 165",
                        "Видеоразъемы: DisplayPort 1.4 x1, HDMI 2.0 x1 USB х1",
                        "Цвет: Чёрный"
                    ],
                    type: "monitor"
                },

                {
                    id: 81,
                    title: "Мышь проводная ARDOR GAMING Fury",
                    price: "1 750,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGFury.webp",
                    details: [
                        "Тип подключения: проводная",
                        "Максимальное разрешение датчика: 12400 dpi",
                        "Подсветка: RGB",
                        "Скорость (IPS): 220",
                        "Цвет: Чёрный"
                    ],
                    type: "mouse"
                },
                {
                    id: 82,
                    title: "Мышь беспроводная Logitech G304 LIGHTSPEED",
                    price: "4 499,00 ₽",
                    imgSrc: "/main/image/LogitechG304LIGHTSPEED.webp",
                    details: [
                        "Тип подключения: беспроводная",
                        "Максимальное разрешение датчика: 12000 dpi",
                        "Подсветка: RGB",
                        "Скорость (IPS): 400",
                        "Цвет: Чёрный"
                    ],
                    type: "mouse"
                },
                {
                    id: 83,
                    title: "Мышь беспроводная/проводная ARDOR GAMING Phantom PRO",
                    price: "5 599,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGPhantomPRO.webp",
                    details: [
                        "Тип подключения: беспроводная, проводная",
                        "Максимальное разрешение датчика: 26000 dpi",
                        "Интерфейс подключения: USB Type-A, радиоканал",
                        "Подсветка: RGB",
                        "Скорость (IPS): 650",
                        "Цвет: Чёрный"
                    ],
                    type: "mouse"
                },
                {
                    id: 84,
                    title: "Мышь беспроводная/проводная LAMZU Atlantis V2 BK MCU 1K",
                    price: "7 999,00 ₽",
                    imgSrc: "/main/image/LAMZUAtlantisV2BKMCU1K.webp",
                    details: [
                        "Тип подключения: беспроводная, проводная",
                        "Максимальное разрешение датчика: 26000 dpi",
                        "Интерфейс подключения: USB Type-A, радиоканал",
                        "Подсветка: RGB",
                        "Скорость (IPS): 650",
                        "Цвет: Чёрный"
                    ],
                    type: "mouse"
                },
                {
                    id: 85,
                    title: "Мышь проводная Logitech G502 HERO",
                    price: "5 699,00 ₽",
                    imgSrc: "/main/image/LogitechG502HERO.webp",
                    details: [
                        "Тип подключения: проводная",
                        "Максимальное разрешение датчика: 16000 dpi",
                        "Интерфейс подключения: USB Type-A",
                        "Подсветка: RGB",
                        "Скорость (IPS): 400",
                        "Цвет: Чёрный"
                    ],
                    type: "mouse"
                },
                {
                    id: 86,
                    title: "Мышь беспроводная ARDOR GAMING Agile PRO",
                    price: "6 499,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGAgilePRO.webp",
                    details: [
                        "Тип подключения: беспроводная",
                        "Максимальное разрешение датчика: 26000 dpi",
                        "Интерфейс подключения: USB Type-A радиоканал",
                        "Подсветка: RGB",
                        "Скорость (IPS): 650",
                        "Цвет: Чёрный"
                    ],
                    type: "mouse"
                },
                {
                    id: 87,
                    title: "Мышь беспроводная Logitech G PRO X SUPERLIGHT",
                    price: "12 899,00 ₽",
                    imgSrc: "/main/image/LogitechGPROXSUPERLIGHT.webp",
                    details: [
                        "Тип подключения: беспроводная",
                        "Максимальное разрешение датчика: 25600 dpi",
                        "Интерфейс подключения: USB Type-A радиоканал",
                        "Подсветка: RGB",
                        "Скорость (IPS): 400",
                        "Цвет: Белый"
                    ],
                    type: "mouse"
                },
                {
                    id: 88,
                    title: "Мышь беспроводная/проводная ARDOR GAMING Phantom PRO",
                    price: "5 599,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGPhantomPROwhite.webp",
                    details: [
                        "Тип подключения: беспроводная/проводная",
                        "Максимальное разрешение датчика: 26000 dpi",
                        "Интерфейс подключения: USB Type-A, радиоканал",
                        "Подсветка: RGB",
                        "Скорость (IPS): 650",
                        "Цвет: Белый"
                    ],
                    type: "mouse"
                },

                {
                    id: 89,
                    title: "Беспроводные наушники Logitech G435",
                    price: "9 299,00 ₽",
                    imgSrc: "/main/image/LogitechG435.webp",
                    details: [
                        "Тип подключения: Bluetooth радиоканал",
                        "Максимальная воспроизводимая частота(Гц): 20000",
                        "Цвет: Чёрный"
                    ],
                    type: "headphones"
                },
                {
                    id: 90,
                    title: "Беспроводные/проводные наушники ARDOR GAMING Vault",
                    price: "5 599,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGVault.webp",
                    details: [
                        "Тип подключения: Bluetooth, радиоканал, провод",
                        "Максимальная воспроизводимая частота(Гц): 20000",
                        "Цвет: Чёрный"
                    ],
                    type: "headphones"
                },
                {
                    id: 91,
                    title: "Беспроводные наушники Дарк Проджект HS5 Wireless V2",
                    price: "8 999,00 ₽",
                    imgSrc: "/main/image/ДаркПроджектHS5.webp",
                    details: [
                        "Тип подключения: Bluetooth, радиоканал",
                        "Максимальная воспроизводимая частота(Гц): 20000",
                        "Цвет: Чёрный"
                    ],
                    type: "headphones"
                },
                {
                    id: 92,
                    title: "Беспроводные наушники Logitech G733",
                    price: "17 499,00 ₽",
                    imgSrc: "/main/image/LogitechG733.webp",
                    details: [
                        "Тип подключения: радиоканал",
                        "Максимальная воспроизводимая частота(Гц): 20000",
                        "Цвет: Чёрный"
                    ],
                    type: "headphones"
                },
                {
                    id: 93,
                    title: "Проводные наушники Fifine H6",
                    price: "3 999,00 ₽",
                    imgSrc: "/main/image/FifineH6.png",
                    details: [
                        "Тип подключения: провод",
                        "Максимальная воспроизводимая частота(Гц): 20000",
                        "Цвет: Белый"
                    ],
                    type: "headphones"
                },
                {
                    id: 94,
                    title: "Проводные наушники HyperX Cloud Alpha S",
                    price: "12 299,00 ₽",
                    imgSrc: "/main/image/HyperXCloudAlphaS.webp",
                    details: [
                        "Тип подключения: провод",
                        "Максимальная воспроизводимая частота(Гц): 27000",
                        "Цвет: Чёрный"
                    ],
                    type: "headphones"
                },
                {
                    id: 95,
                    title: "Проводные наушники Razer BlackShark V2 X",
                    price: "7 299,00 ₽",
                    imgSrc: "/main/image/RazerBlackSharkV2.webp",
                    details: [
                        "Тип подключения: провод",
                        "Максимальная воспроизводимая частота(Гц): 28000",
                        "Цвет: Чёрный"
                    ],
                    type: "headphones"
                },
                {
                    id: 96,
                    title: "Наушники TWS JBL WAVE BEAM",
                    price: "5 999,00 ₽",
                    imgSrc: "/main/image/TWSJBLWAVEBEAM.webp",
                    details: [
                        "Тип подключения: Bluetooth",
                        "Максимальная воспроизводимая частота(Гц): 20000",
                        "Цвет: Чёрный"
                    ],
                    type: "headphones"
                },
                {
                    id: 97,
                    title: "Беспроводные наушники JBL Tune 520BT",
                    price: "4 999,00 ₽",
                    imgSrc: "/main/image/JBLTune520BT.webp",
                    details: [
                        "Тип подключения: Bluetooth",
                        "Максимальная воспроизводимая частота(Гц): 20000",
                        "Цвет: Чёрный"
                    ],
                    type: "headphones"
                },

                {
                    id: 98,
                    title: "Клавиатура проводная Red Square Keyrox TKL Aquarius",
                    price: "5 299,00 ₽",
                    imgSrc: "/main/image/RedSquareKeyroxTKLAquarius.webp",
                    details: [
                        "Тип подключения: проводная",
                        "Формат клавиатуры: TKL (80%)",
                        "Тип клавиатуры: механическая",
                        "Цвет подсветки клавиш: RGB",
                        "Материал кейкапов: ABS",
                        "Цвет: Белый"
                    ],
                    type: "keyboard"
                },
                {
                    id: 99,
                    title: "Клавиатура проводная ARDOR GAMING Blade",
                    price: "5 199,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGBlade.webp",
                    details: [
                        "Тип подключения: проводная",
                        "Формат клавиатуры: (100%)",
                        "Тип клавиатуры: механическая",
                        "Цвет подсветки клавиш: RGB",
                        "Материал кейкапов: PBT",
                        "Цвет: Чёрный"
                    ],
                    type: "keyboard"
                },
                {
                    id: 100,
                    title: "Клавиатура проводная Дарк Проджект KD87A",
                    price: "8 699,00 ₽",
                    imgSrc: "/main/image/ДаркПроджектKD87A.webp",
                    details: [
                        "Тип подключения: проводная",
                        "Формат клавиатуры: (80%)",
                        "Тип клавиатуры: механическая",
                        "Цвет подсветки клавиш: RGB",
                        "Материал кейкапов: PBT",
                        "Цвет: Чёрный"
                    ],
                    type: "keyboard"
                },
                {
                    id: 101,
                    title: "Клавиатура проводная + беспроводная ARDOR GAMING Guardian",
                    price: "8 199,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGGuardian.webp",
                    details: [
                        "Тип подключения: проводная + беспроводная",
                        "Формат клавиатуры: (100%)",
                        "Тип клавиатуры: механическая",
                        "Цвет подсветки клавиш: RGB",
                        "Материал кейкапов: PBT",
                        "Цвет: Чёрный"
                    ],
                    type: "keyboard"
                },
                {
                    id: 102,
                    title: "Клавиатура проводная + беспроводная ARDOR GAMING Patron 75",
                    price: "6 799,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGPatron75.webp",
                    details: [
                        "Тип подключения: проводная + беспроводная",
                        "Формат клавиатуры: (75%)",
                        "Тип клавиатуры: механическая",
                        "Цвет подсветки клавиш: RGB",
                        "Интерфейс подключения: Bluetooth, USB Type-A, радиоканал",
                        "Материал кейкапов: PBT",
                        "Цвет: Чёрный"
                    ],
                    type: "keyboard"
                },
                {
                    id: 103,
                    title: "Клавиатура проводная Logitech G412 TKL SE",
                    price: "4 399,00 ₽",
                    imgSrc: "/main/image/LogitechG412TKLSE.webp",
                    details: [
                        "Тип подключения: проводная",
                        "Формат клавиатуры: TKL(80%)",
                        "Тип клавиатуры: механическая",
                        "Цвет подсветки клавиш: RGB",
                        "Материал кейкапов: PBT",
                        "Цвет: Чёрный"
                    ],
                    type: "keyboard"
                },
                {
                    id: 104,
                    title: "Клавиатура проводная + беспроводная ARDOR GAMING Katana",
                    price: "11 199,00 ₽",
                    imgSrc: "/main/image/ARDORGAMINGKatana.webp",
                    details: [
                        "Тип подключения: проводная/беспроводная",
                        "Формат клавиатуры: (100%)",
                        "Тип клавиатуры: механическая",
                        "Интерфейс подключения: Bluetooth, USB Type-A, радиоканал",
                        "Цвет подсветки клавиш: RGB",
                        "Материал кейкапов: PBT",
                        "Цвет: Чёрный"
                    ],
                    type: "keyboard"
                },
                {
                    id: 105,
                    title: "Клавиатура проводная MSI Vigor GK30",
                    price: "3 999,00 ₽",
                    imgSrc: "/main/image/MSIVigorGK30.webp",
                    details: [
                        "Тип подключения: проводная",
                        "Формат клавиатуры: (100%)",
                        "Тип клавиатуры: механическая",
                        "Интерфейс подключения: USB Type-A",
                        "Цвет подсветки клавиш: RGB",
                        "Материал кейкапов: PBT",
                        "Цвет: Белый"
                    ],
                    type: "keyboard"
                },
                {
                    id: 106,
                    title: "Клавиатура проводная Red Square Keyrox TKL Classic Everfrost",
                    price: "6 199,00 ₽",
                    imgSrc: "/main/image/RedSquareKeyroxTKLClassicEverfrost.webp",
                    details: [
                        "Тип подключения: проводная",
                        "Формат клавиатуры: (80%)",
                        "Тип клавиатуры: механическая",
                        "Интерфейс подключения: USB Type-A",
                        "Цвет подсветки клавиш: RGB",
                        "Материал кейкапов: PBT",
                        "Цвет: Фиолетовый"
                    ],
                    type: "keyboard"
                }
            ];
            localStorage.setItem(this.databases.pereferiaDB, JSON.stringify(pereferiaDB));
            console.log('Сохранено в pereferiaDB:', JSON.parse(localStorage.getItem('pereferiaDB')));
        }
    },

    addProduct: function (product) {
        const dbKey = this.getDBKey(product.type);
        let db = JSON.parse(localStorage.getItem(dbKey));
        
        if (!db || !Array.isArray(db)) {
            console.warn(`База ${dbKey} не найдена или некорректна, создаём новую`);
            db = [];
        }
        
        db.push(product);
        localStorage.setItem(dbKey, JSON.stringify(db));
        console.log(`Товар добавлен в ${dbKey}, новое количество товаров: ${db.length}`);
        return dbKey;
    },

    deleteProduct: function (productId, category, dbKey) {
        console.log(`Удаление товара с id: ${productId} из базы ${dbKey}, категория: ${category}`);
        let db = JSON.parse(localStorage.getItem(dbKey)) || [];

        db = db.filter(product => String(product.id) !== String(productId));

        localStorage.setItem(dbKey, JSON.stringify(db));
        console.log(`Товар удалён, новое количество товаров в ${dbKey}: ${db.length}`);
    },

    getDBKey: function (type) {
        switch (type) {
            case 'electronics':
            case 'tablets':
            case 'notebooks':
            case 'pcs':
                return this.databases.electronicsDB;
            case 'consoles':
            case 'speakers':
            case 'tvs':
                return this.databases.multimediaDB;
            case 'monitor':
            case 'mouse':
            case 'headphones':
            case 'keyboard':
                return this.databases.pereferiaDB;
            default:
                return this.databases.electronicsDB;
        }
    },

 
    renderProducts: function (category) {
        localStorage.setItem('selectedCategory', category);
    }
};


document.addEventListener('DOMContentLoaded', () => {
    console.log('init.js выполняется после загрузки DOM...');
    window.dbManager.initializeDB();
});