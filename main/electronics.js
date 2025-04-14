let goodsDB = [
    // Смартфоны (type: "electronics")
    {
        id: 1,
        title: "Смартфон Apple Iphone 15",
        price: "67 490,00 ₽",
        imgSrc: "/main/image/iphone15.webp",
        details: [
            "Диагональ экрана (дюйм): 6.1.",
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
        title: "Смартфон Apple Iphone 12",
        price: "58 590,00 ₽",
        imgSrc: "/main/image/iphone12.webp",
        details: [
            "Диагональ экрана (дюйм): 6.1.",
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
            "Фотокамера (МПикс): 50+0,08 (двойная)",
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
            "Фотокамера (МПикс): 50+2+0,08 (тройная)",
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
            "Фотокамера (МПикс): 108+2+0,08 (тройная)",
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
            "Фотокамера (МПикс): 108+2+0,08 (тройная)",
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

    // Планшеты (type: "tablets")
    {
        id: 19,
        title: "Планшет Samsung Galaxy Tab S10+",
        price: "120 990,00 ₽",
        imgSrc: "/main/image/SamsungGalaxyTabS10+.webp",
        details: [
            "Диагональ экрана (дюйм): 6.1.",
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

    // Ноутбуки (type: "notebooks")
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
            "Разрешение экрана: 2560x16000",
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

if (document.querySelector('.card-electronics') || document.querySelector('.sort-container')) {
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.card-electronics');
        const selectedCategory = localStorage.getItem('selectedCategory') || 'electronics';

        let className, targetContainer;
        switch (selectedCategory) {
            case 'electronics':
                className = 'product-card-electronics';
                targetContainer = document.querySelector('.card-electronics') || document.createElement('div');
                targetContainer.className = 'card-electronics';
                break;
            case 'tablets':
                className = 'product-card-tablets';
                targetContainer = document.querySelector('.card-tablets') || document.createElement('div');
                targetContainer.className = 'card-tablets';
                break;
            case 'notebooks':
                className = 'product-card-notebooks';
                targetContainer = document.querySelector('.card-notebooks') || document.createElement('div');
                targetContainer.className = 'card-notebooks';
                break;
            case 'pcs':
                className = 'product-card-pcs';
                targetContainer = document.querySelector('.card-pcs') || document.createElement('div');
                targetContainer.className = 'card-pcs';
                break;
            default:
                className = 'product-card-electronics';
                targetContainer = document.querySelector('.card-electronics');
        }

        if (!document.querySelector(`.${targetContainer.className}`)) {
            document.body.insertBefore(targetContainer, document.querySelector('footer'));
        }

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

        renderGoods(goodsDB, targetContainer, className);
    });
}

if (document.querySelector('.link-button')) {
    document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('.link-button button a');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.getAttribute('href').split('/').pop().replace('.html', '');
                let type;

                switch (category) {
                    case 'smartfon':
                        type = 'electronics';
                        break;
                    case 'planshet':
                        type = 'tablets';
                        break;
                    case 'note':
                        type = 'notebooks';
                        break;
                    case 'pc':
                        type = 'pcs';
                        break;
                    default:
                        type = 'electronics';
                }

                localStorage.setItem('selectedCategory', type);
                window.location.href = link.getAttribute('href');
            });
        });

        const cartCounter = document.getElementById('cart-counter');
        let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
        cartCounter.textContent = cartCount;
    });
}