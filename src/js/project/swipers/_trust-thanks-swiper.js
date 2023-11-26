import Swiper, {
    Navigation, Scrollbar, Autoplay,
} from 'swiper';

Swiper.use([Navigation, Scrollbar, Autoplay]);

if (document.querySelector('.trust-thanks')) {
    new Swiper('.trust-thanks .trust__swiper', {
        speed: 800,
        spaceBetween: 20,
        navigation: {
            nextEl: '.trust__button--next',
            prevEl: '.trust__button--prev',
        },

        scrollbar: {
            el: '.trust__scrollbar',
            draggable: true,
        },

        breakpoints: {
            1200: {
                slidesPerGroup: 5,
                slidesPerView: 5,
            },

            992: {
                slidesPerGroup: 3,
                slidesPerView: 3.5,
            },

            560: {
                spaceBetween: 2,
                slidesPerView: 2.5,
                spaceBetween: 20,
            },

            0: {
                spaceBetween: 1,
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
        },
    });
}
