import Swiper, {
    Navigation, Scrollbar, Autoplay,
} from 'swiper';

Swiper.use([Navigation, Scrollbar, Autoplay]);

if (document.querySelector('.portfolio__swiper')) {
    new Swiper('.portfolio__swiper', {
        speed: 800,
        spaceBetween: 20,
        navigation: {
            nextEl: '.portfolio__button--next',
            prevEl: '.portfolio__button--prev',
        },

        scrollbar: {
            el: '.portfolio__scrollbar',
            draggable: true,
        },

        breakpoints: {
            1200: {
                slidesPerGroup: 4,
                slidesPerView: 4,
            },

            992: {
                slidesPerGroup: 3,
                slidesPerView: 3,
            },

            560: {
                spaceBetween: 2,
                slidesPerView: 2,
                spaceBetween: 20,
            },

            0: {
                spaceBetween: 1,
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    });
}
