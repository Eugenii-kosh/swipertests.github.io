let imageSwiper = new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        // Кружки под свайпером, где каждый кружок это страничка свайпа
        // clickable: true,
        // dynamicBullets: true,
        // renderBullet: function(index, className) {
        //     return '<span class="'+ className + '">' + (index + 1) + '</span>';
        // },

        // Это настройка что бы показывать какая фотка из списка фоток 
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return 'Photo <span class="' + currentClass + '"></span>' +
                ' from ' +
                '<span class="' + totalClass + '"></span>';
        },
        // type: 'progressbar' шкала заполнения по мере прокрутки контента
    },

    // полоса скролла внизу контента (можно настроить). Ползунок. 
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    // Перетаскивание на ПК (свайп мышью)
    simulateTouch: true,
    // чувствительность свайпа
    touchRatio: 1,
    // угол срабатывания свайпа-перетаскивания
    touchAngle: 45,
    // курсор перетаскивания
    grabCursor: true,
    // Переключения слайда по клику на него (работает если на страничке несколько слайдов, с 1 не работает)
    slideToClickedSlide: false,

    // Навигация по хешу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },

    // Управление с помощью клавиатуры
    keyboard: {
        enabled: true,
        // Вкл/выкл
        // Только когда слайдер в приделах вьюпорта
        onlyInViewport: true,
        // Вкл/выкл
        // управление клавишами pageUp, pageDown 
        pageUpDown: true,
    },

    // управление с помощью мыши
    mousewheel: {
        // чувствительностьколеса мыши
        sensitivity: 1,
        // Класс объекта на котором будет срабатывать скролл
        eventTarget: ".image-slider"
    },

    // Автовысота
    autoHeight: true,

    // отвечает за количество слайдов на страничке (видимых). значение 'auto' позволяет формировать количество слайдов на страничке
    // по их ширине. При этом в настройках img в css можно указать ширину контента, для управления им.
    slidesPerView: 3,

    // если осталось контента меньше чем в настройках свайпера, он отключаеться.
    watchOverflow: true,

    // задаёт отступ между слайдами (если в показах их больше 1 slidesPerView: 3 к примеру)
    spaceBetween: 30,

    // количество пролистываемых слайдов
    slidesPerGroup: 1,

    // центрует слайдер по центру (контент)
    centeredSlides: false,

    // стартовый слайд
    initialSlide: 0,

    // Мультирядность. Для корректной работы нужно отключать автовысоту.
    // slidesPerColumn: 1,

    // бесконечное прокручивание. Бесконечный слайдер не подразумевает скролл(его нужно выключить). Бесконечность НЕ БУДЕТ работать
    // с мультирядностью! Если у нас стоит авто в slidesPerView , то в специальном параметре loopedSlides, нужно указать количество
    // дублирующих слайдов ВРУЧНУЮ!
    loop: false,

    loopedSlides: 0,

    // свободный режим
    freeMode: false,

    // Автопрокрутка
    // autoplay: {
    //     // Пауза между прокруткой
    //     delay: 1000,
    //     // Закончить на последнем слайде
    //     stopOnLastSlide: true,
    //     // отключить после ручного переключения
    //     disableOnInteraction: false
    // },


    // скорость прокрутки
    speed: 1000,

    // вертикальный слайдер
    direction: 'horizontal',


    // эфекты переключения слайдов.
    // Листание (standart)
    effect: 'slide',

    //Смена прозрачности (ПОДХОДИТЬ ТОЛЬКО ДЛЯ 1 СЛАЙДА, НЕ ГРУППЫ)
    // effect: "fade",

    // // Дополнительные параметры к fabe
    // fadeEffect: {
    //     // параллельная смена прозрачности
    //     crossFade: true
    // },

    // fadeEffect: { crossFade: true },
    // // virtualTranslate: true,
    // // autoplay: 2500,
    // speed: 1000,
    // // autoplayDisableOnInteraction: true,
    // slidersPerView: 1,
    // effect: "fade"


    // Переворот
    // effect: 'flip', 

    // flipEffect: {
    //     // тень
    //     slideShadows: true,
    //     // показ только активного слайда
    //     limitRotation: true
    // },

    // Куб
    // effect: 'cube',

    // // Дополнение к cube . Важно установить ширину в .image-slider для эфекта куба
    // cubeEffect:{
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94
    // },

    // Эфект потока
    // effect: 'coverflow',

    // coverflowEffect : {
    //     // угол
    //     rotate: 20,
    //     // Наложение
    //     stretch: 50,
    //     // тень
    //     slideSadows: true,
    // },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },

    // Отключить предзагрузку картинок
    preloadImages: false,
    lazy: {
        // подгружать на старте переключения слайда
        loadOnTransitionStart: false,
        // подгрузить предыдущую и следующую картинки 
        loadPrevNext: false,
    },

    // Слежка за видимыми слайдами
    watchSlidesProgress: true,
    // Добавление класса видимым слайдам
    watchSlidesVisibility: true,

    // Зум картинки
    zoom: {
        // Максимальное увеличение
        maxRatio: 5,
        // минимальное увеличение
        minRatio: 1,
    },

});

let textSwiper = new Swiper(".text-slider", {

    spaceBetween: 30,

    slidesPerView: 3,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
});

imageSwiper.controller.control = textSwiper;
textSwiper.controller.control = imageSwiper;

new Swiper('.parallax-slider', {

    parallax: true,
    speed: 2000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,

    spaceBetween: 30,
});